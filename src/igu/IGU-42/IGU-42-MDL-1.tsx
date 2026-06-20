import Card from "react-bootstrap/Card";
import { IGU_42_BTN_1 } from "./IGU-42-BTN-1";
import { IGU_42_BTN_2 } from "./IGU-42-BTN-2";

export function IGU_42_MDL_1() {
  return (
    <Card className="border-danger">
      <Card.Body>
        <Card.Title className="text-danger">Inactivar Plataforma</Card.Title>
        <Card.Text>
          ¿Está seguro que desea inactivar la plataforma{" "}
          <strong>WhatsApp Business</strong>? El registro pasará al estado{" "}
          <strong>Inactivo</strong> y dejará de enviar notificaciones a los
          apoderados.
        </Card.Text>
        <div className="d-flex gap-2 mt-4">
          <IGU_42_BTN_1 />
          <IGU_42_BTN_2 />
        </div>
      </Card.Body>
    </Card>
  );
}
