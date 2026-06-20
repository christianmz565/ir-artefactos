import Badge from "react-bootstrap/Badge";
import { Button } from "@/components/Button/Button";
import type { Notificacion } from "@/types/notificacion";

interface NotificationRowProps {
  notificacion: Notificacion;
}

function getEstadoVariant(estado: Notificacion["estado"]): string {
  return estado === "Enviado" ? "success" : "secondary";
}

export function NotificationRow({ notificacion }: NotificationRowProps) {
  return (
    <tr>
      <td>{notificacion.fechaHora}</td>
      <td>{notificacion.apoderadoDestino}</td>
      <td>
        <span title={notificacion.mensaje}>
          {notificacion.mensaje.length > 50
            ? `${notificacion.mensaje.substring(0, 50)}...`
            : notificacion.mensaje}
        </span>
      </td>
      <td>{notificacion.plataforma}</td>
      <td>
        <Badge bg={getEstadoVariant(notificacion.estado)}>
          {notificacion.estado}
        </Badge>
      </td>
      <td>
        <Button
          size="sm"
          variant="danger"
          id={`BTN-ELIMINAR-${notificacion.id}`}
        >
          Eliminar
        </Button>
      </td>
    </tr>
  );
}
