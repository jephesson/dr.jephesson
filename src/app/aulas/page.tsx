type VideoItem = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  durationSeconds: number;
};

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;
const CHANNEL_HANDLE = process.env.YOUTUBE_CHANNEL_HANDLE || "dr.jephessonsantos";
const MIN_DURATION_SECONDS = 61;
const MAX_PAGES = 20;
const REVALIDATE_SECONDS = 3600;

const API_BASE = "https://www.googleapis.com/youtube/v3";

function parseDurationToSeconds(duration: string): number {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  const hours = Number(match[1] ?? 0);
  const minutes = Number(match[2] ?? 0);
  const seconds = Number(match[3] ?? 0);
  return hours * 3600 + minutes * 60 + seconds;
}

function formatDuration(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function formatDate(iso: string): string {
  if (!iso) return "";
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(iso));
}

function trimDescription(text: string, max = 110): string {
  const compact = text.replace(/\s+/g, " ").trim();
  if (!compact) return "";
  if (compact.length <= max) return compact;
  return `${compact.slice(0, max).trimEnd()}...`;
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
  if (!res.ok) {
    throw new Error(`YouTube API error: ${res.status}`);
  }
  return (await res.json()) as T;
}

async function getUploadsPlaylistId(apiKey: string, channelId: string): Promise<string | null> {
  const url = new URL(`${API_BASE}/channels`);
  url.searchParams.set("part", "contentDetails");
  url.searchParams.set("id", channelId);
  url.searchParams.set("key", apiKey);
  const data = await fetchJson<{
    items?: Array<{ contentDetails?: { relatedPlaylists?: { uploads?: string } } }>;
  }>(url.toString());
  return data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads ?? null;
}

function normalizeHandle(handle: string): string {
  return handle.replace(/^@/, "").trim();
}

async function getChannelIdByHandle(apiKey: string, handle: string): Promise<string | null> {
  const normalized = normalizeHandle(handle);
  if (!normalized) return null;
  const url = new URL(`${API_BASE}/channels`);
  url.searchParams.set("part", "id");
  url.searchParams.set("forHandle", normalized);
  url.searchParams.set("key", apiKey);
  const data = await fetchJson<{ items?: Array<{ id?: string }> }>(url.toString());
  return data.items?.[0]?.id ?? null;
}

async function resolveChannelId(apiKey: string, channelId?: string, handle?: string): Promise<string | null> {
  if (channelId) return channelId;
  if (!handle) return null;
  return getChannelIdByHandle(apiKey, handle);
}

async function getPlaylistItems(apiKey: string, playlistId: string): Promise<Omit<VideoItem, "durationSeconds">[]> {
  let pageToken: string | undefined = undefined;
  const items: Omit<VideoItem, "durationSeconds">[] = [];

  for (let page = 0; page < MAX_PAGES; page += 1) {
    const url = new URL(`${API_BASE}/playlistItems`);
    url.searchParams.set("part", "snippet,contentDetails");
    url.searchParams.set("playlistId", playlistId);
    url.searchParams.set("maxResults", "50");
    url.searchParams.set("key", apiKey);
    if (pageToken) url.searchParams.set("pageToken", pageToken);

    const data = await fetchJson<{
      nextPageToken?: string;
      items?: Array<{
        contentDetails?: { videoId?: string };
        snippet?: {
          title?: string;
          description?: string;
          publishedAt?: string;
          thumbnails?: {
            maxres?: { url?: string };
            high?: { url?: string };
            medium?: { url?: string };
            default?: { url?: string };
          };
        };
      }>;
    }>(url.toString());

    for (const item of data.items ?? []) {
      const videoId = item.contentDetails?.videoId;
      const snippet = item.snippet;
      const thumbs = snippet?.thumbnails;
      const thumbnail =
        thumbs?.maxres?.url ?? thumbs?.high?.url ?? thumbs?.medium?.url ?? thumbs?.default?.url ?? "";

      if (!videoId || !snippet?.title || !thumbnail) continue;
      items.push({
        id: videoId,
        title: snippet.title,
        description: snippet.description ?? "",
        thumbnail,
        publishedAt: snippet.publishedAt ?? "",
      });
    }

    pageToken = data.nextPageToken;
    if (!pageToken) break;
  }

  return items;
}

async function getDurations(apiKey: string, ids: string[]): Promise<Map<string, number>> {
  const durationMap = new Map<string, number>();
  for (let i = 0; i < ids.length; i += 50) {
    const chunk = ids.slice(i, i + 50);
    const url = new URL(`${API_BASE}/videos`);
    url.searchParams.set("part", "contentDetails");
    url.searchParams.set("id", chunk.join(","));
    url.searchParams.set("key", apiKey);

    const data = await fetchJson<{
      items?: Array<{ id?: string; contentDetails?: { duration?: string } }>;
    }>(url.toString());

    for (const item of data.items ?? []) {
      if (!item.id) continue;
      durationMap.set(item.id, parseDurationToSeconds(item.contentDetails?.duration ?? ""));
    }
  }

  return durationMap;
}

async function getLongVideos(): Promise<{ videos: VideoItem[]; error?: string }> {
  if (!API_KEY) {
    return { videos: [], error: "missing-env" };
  }

  try {
    const resolvedChannelId = await resolveChannelId(API_KEY, CHANNEL_ID, CHANNEL_HANDLE);
    if (!resolvedChannelId) {
      return { videos: [], error: "missing-channel" };
    }

    const playlistId = await getUploadsPlaylistId(API_KEY, resolvedChannelId);
    if (!playlistId) {
      return { videos: [], error: "no-playlist" };
    }

    const items = await getPlaylistItems(API_KEY, playlistId);
    if (!items.length) {
      return { videos: [], error: "no-videos" };
    }

    const durations = await getDurations(
      API_KEY,
      items.map((item) => item.id),
    );

    const videos = items
      .map((item) => ({
        ...item,
        durationSeconds: durations.get(item.id) ?? 0,
      }))
      .filter((item) => item.durationSeconds > MIN_DURATION_SECONDS);

    return { videos };
  } catch (error) {
    console.error(error);
    return { videos: [], error: "api-error" };
  }
}

export default async function Page() {
  const { videos, error } = await getLongVideos();

  return (
    <div className="rounded-2xl border bg-white p-6" style={{ borderColor: "rgba(15,26,43,0.12)" }}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold" style={{ color: "#0b1422" }}>
            Aulas grátis - Youtube
          </h2>
          <p className="mt-2 text-sm" style={{ color: "rgba(11,20,34,0.65)" }}>
            Lista automática com os vídeos longos do canal (exclui Shorts).
          </p>
        </div>
        <a
          href="https://www.youtube.com/@dr.jephessonsantos"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold"
          style={{ background: "var(--accent)", color: "#0b1422" }}
        >
          Ver canal no YouTube
        </a>
      </div>

      {error === "missing-env" ? (
        <div className="mt-6 rounded-xl px-4 py-3 text-sm" style={{ border: "1px solid rgba(15,26,43,0.12)", color: "rgba(11,20,34,0.75)" }}>
          Defina a variável <strong>YOUTUBE_API_KEY</strong> para exibir os vídeos.
        </div>
      ) : null}

      {error === "missing-channel" ? (
        <div className="mt-6 rounded-xl px-4 py-3 text-sm" style={{ border: "1px solid rgba(15,26,43,0.12)", color: "rgba(11,20,34,0.75)" }}>
          Não foi possível localizar o canal. Verifique <strong>YOUTUBE_CHANNEL_ID</strong> ou <strong>YOUTUBE_CHANNEL_HANDLE</strong>.
        </div>
      ) : null}

      {error && error !== "missing-env" ? (
        <div className="mt-6 rounded-xl px-4 py-3 text-sm" style={{ border: "1px solid rgba(15,26,43,0.12)", color: "rgba(11,20,34,0.75)" }}>
          Não foi possível carregar os vídeos agora. Tente novamente em alguns minutos.
        </div>
      ) : null}

      {!error && (
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex flex-col gap-2 rounded-xl border bg-white p-3"
              style={{ borderColor: "rgba(15,26,43,0.12)" }}
            >
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noreferrer"
                className="relative aspect-video w-full overflow-hidden rounded-lg"
              >
                <img src={video.thumbnail} alt={video.title} className="h-full w-full object-cover" />
                <span
                  className="absolute bottom-2 right-2 rounded px-2 py-1 text-[11px] font-semibold"
                  style={{ background: "rgba(0,0,0,0.72)", color: "#fff" }}
                >
                  {formatDuration(video.durationSeconds)}
                </span>
              </a>

              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13px] font-semibold leading-snug"
                  style={{ color: "#0b1422" }}
                >
                  {video.title}
                </a>
                {video.description ? (
                  <p className="text-[12px]" style={{ color: "rgba(11,20,34,0.68)" }}>
                    {trimDescription(video.description)}
                  </p>
                ) : null}
                <p className="text-[11px]" style={{ color: "rgba(11,20,34,0.55)" }}>
                  Publicado em {formatDate(video.publishedAt)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {!error && videos.length === 0 ? (
        <p className="mt-6 text-sm" style={{ color: "rgba(246,247,248,0.72)" }}>
          Nenhum vídeo longo encontrado ainda.
        </p>
      ) : null}
    </div>
  );
}
