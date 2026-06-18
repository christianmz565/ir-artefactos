import type { Asistencia } from "@/types/asistencia";
import { AttendanceRow } from "./AttendanceRow";
import { EmptyState } from "./EmptyState";

interface AttendanceTableBodyProps {
  assistances: Asistencia[];
}

export function AttendanceTableBody({ assistances }: AttendanceTableBodyProps) {
  return (
    <tbody>
      {assistances.length === 0 ? (
        <EmptyState />
      ) : (
        assistances.map((a) => <AttendanceRow key={a.id} asistencia={a} />)
      )}
    </tbody>
  );
}
