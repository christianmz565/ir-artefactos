import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import { Button } from "@/components/Button/Button";
import { MOCK_NOTIFICACIONES } from "@/mocks/notificaciones";

interface EliminarNotificacionCardProps {
  notificacionId?: number;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export function EliminarNotificacionCard({
  notificacionId = 1,
  onConfirm,
  onCancel,
}: EliminarNotificacionCardProps) {
  const notificacion =
    MOCK_NOTIFICACIONES.find((n) => n.id === notificacionId) ||
    MOCK_NOTIFICACIONES[0];

  return (
    <Card>
      <Card.Body>
        <Card.Title>Eliminar Notificación</Card.Title>
        <p className="mb-3">¿Desea eliminar este log de notificación?</p>
        <Alert variant="warning">
          Esta acción eliminará el registro histórico de esta comunicación.
        </Alert>
        <p className="text-muted mb-3">
          <strong>Destinatario:</strong> {notificacion.apoderadoDestino}
        </p>
        <div className="d-flex mt-3 gap-2">
          <Button variant="danger" onClick={onConfirm} id="confirm-delete">
            Eliminar
          </Button>
          <Button variant="secondary" onClick={onCancel} id="cancel-delete">
            Cancelar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
