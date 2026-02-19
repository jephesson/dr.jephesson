import { Suspense } from "react";
import MedicamentosHub from "@/components/MedicamentosHub";

export default function Page() {
  return (
    <div className="rounded-2xl p-6">
      <Suspense fallback={<div className="meds-article meds-article--full">Carregando...</div>}>
        <MedicamentosHub />
      </Suspense>
    </div>
  );
}
