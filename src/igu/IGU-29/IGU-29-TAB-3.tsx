import { Button } from "@/components/Button/Button";
import type { Reporte } from "@/types/reporte";
import { IGU_29_TAB_3_BTN_1 } from "./IGU-29-TAB-3-BTN-1";
import { IGU_29_TAB_3_BTN_3 } from "./IGU-29-TAB-3-BTN-3";

export function IGU_29_TAB_3({ reporte }: { reporte: Reporte }) {
  const isCompleted = reporte.estado === "Completed";
  const badgeBg =
    reporte.estado === "Completed"
      ? "success"
      : reporte.estado === "Generating"
        ? "warning"
        : "danger";

  return (
    <tr>
      <td>{reporte.id}</td>
      <td>{reporte.nombre}</td>
      <td>{reporte.periodo}</td>
      <td>{new Date(reporte.fechaGeneracion).toLocaleString()}</td>
      <td>{reporte.usuarioSolicitante}</td>
      <td>
        <span className={`badge bg-${badgeBg}`}>{reporte.estado}</span>
      </td>
      <td>
        <div className="d-flex gap-2">
          <IGU_29_TAB_3_BTN_1 id={String(reporte.id)} />
          {reporte.urlDescarga && isCompleted && (
            <Button
              size="sm"
              variant="info"
              id={`igu-29-tab-3-dl-${reporte.id}`}
            >
              Descargar
            </Button>
          )}
          <IGU_29_TAB_3_BTN_3 id={String(reporte.id)} />
        </div>
      </td>
    </tr>
  );
}
