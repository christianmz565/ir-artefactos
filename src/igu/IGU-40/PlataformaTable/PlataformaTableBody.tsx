import type { Plataforma } from "@/types/plataforma";
import { EmptyState } from "./EmptyState";
import { PlataformaRow } from "./PlataformaRow";

interface PlataformaTableBodyProps {
  plataformas: Plataforma[];
}

export function PlataformaTableBody({ plataformas }: PlataformaTableBodyProps) {
  return (
    <tbody>
      {plataformas.length === 0 ? (
        <EmptyState />
      ) : (
        plataformas.map((p) => <PlataformaRow key={p.id} plataforma={p} />)
      )}
    </tbody>
  );
}
