import Badge from "react-bootstrap/Badge";
import { Button } from "@/components/Button/Button";
import type { Asistencia } from "@/types/asistencia";

interface AttendanceRowProps {
  asistencia: Asistencia;
  onView?: () => void;
  onInactivate?: () => void;
}

function getEstadoVariant(estado: Asistencia["estado"]): string {
  switch (estado) {
    case "Presente":
      return "success";
    case "Tardanza":
      return "warning";
    case "Falta":
      return "secondary";
  }
}

export function AttendanceRow({
  asistencia,
  onView,
  onInactivate,
}: AttendanceRowProps) {
  return (
    <tr>
      <td>{asistencia.fecha}</td>
      <td>{asistencia.estudianteNombre}</td>
      <td>{asistencia.hora}</td>
      <td>{asistencia.tipo}</td>
      <td>
        <Badge bg={getEstadoVariant(asistencia.estado)}>
          {asistencia.estado}
        </Badge>
      </td>
      <td>
        <div className="d-flex gap-1">
          <Button
            size="sm"
            variant="info"
            onClick={onView}
            id={`view-asistencia-${asistencia.id}`}
          >
            Ver
          </Button>
          <Button
            size="sm"
            variant="danger"
            onClick={onInactivate}
            id={`inactivate-asistencia-${asistencia.id}`}
          >
            Inactivar
          </Button>
        </div>
      </td>
    </tr>
  );
}
