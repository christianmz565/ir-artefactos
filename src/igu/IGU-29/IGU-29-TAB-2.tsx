import type { Reporte } from "@/types/reporte";
import { IGU_29_ALT_1 } from "./IGU-29-ALT-1";
import { IGU_29_TAB_3 } from "./IGU-29-TAB-3";

export function IGU_29_TAB_2({ reportes }: { reportes: Reporte[] }) {
  if (reportes.length === 0) {
    return <IGU_29_ALT_1 />;
  }
  return (
    <tbody>
      {reportes.map((reporte) => (
        <IGU_29_TAB_3 key={reporte.id} reporte={reporte} />
      ))}
    </tbody>
  );
}
