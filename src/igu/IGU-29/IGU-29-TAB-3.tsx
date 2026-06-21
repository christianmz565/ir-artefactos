import { Button } from "@/components/Button/Button";
import type { Reporte } from "@/types/reporte";

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
          <Button size="sm" id={`igu-29-tab-3-view-${reporte.id}`}>
            Ver
          </Button>
          {reporte.urlDescarga && isCompleted && (
            <Button
              size="sm"
              variant="info"
              id={`igu-29-tab-3-dl-${reporte.id}`}
            >
              Descargar
            </Button>
          )}
          <Button
            size="sm"
            variant="danger"
            id={`igu-29-tab-3-del-${reporte.id}`}
          >
            Eliminar
          </Button>
        </div>
      </td>
    </tr>
  );
}
