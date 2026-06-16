import type { Auxiliar } from "@/types/auxiliar";
import { AuxiliarRow } from "./AuxiliarRow";
import { EmptyState } from "./EmptyState";

interface AuxiliarTableBodyProps {
  auxiliares: Auxiliar[];
}

export function AuxiliarTableBody({ auxiliares }: AuxiliarTableBodyProps) {
  return (
    <tbody>
      {auxiliares.length === 0 ? (
        <EmptyState />
      ) : (
        auxiliares.map((a) => <AuxiliarRow key={a.id} auxiliar={a} />)
      )}
    </tbody>
  );
}
