import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import { IGU_27_BTN_1 } from "./IGU-27-BTN-1";
import { IGU_27_BTN_2 } from "./IGU-27-BTN-2";

export function IGU_27_MDL_1() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Eliminar Notificación</Card.Title>
        <p className="mb-3">¿Desea eliminar este log de notificación?</p>
        <Alert variant="warning">
          Esta acción eliminará el registro histórico de esta comunicación.
        </Alert>
        <p className="text-muted mb-3">
          <strong>Destinatario:</strong> Pedro Pérez (Apoderado de Juan Pérez)
        </p>
        <div className="d-flex mt-3 gap-2">
          <IGU_27_BTN_1 />
          <IGU_27_BTN_2 />
        </div>
      </Card.Body>
    </Card>
  );
}
