import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { IGU_17_BTN_1 } from "./IGU-17-BTN-1";
import { IGU_17_BTN_2 } from "./IGU-17-BTN-2";
import { IGU_17_INP_1 } from "./IGU-17-INP-1";
import { IGU_17_INP_2 } from "./IGU-17-INP-2";
import { IGU_17_SELECT_1 } from "./IGU-17-SELECT-1";
import { IGU_17_SELECT_2 } from "./IGU-17-SELECT-2";

export function IGU_17_FORM_1() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Crear Nueva Notificación</Card.Title>
        <Form>
          <IGU_17_SELECT_1 />
          <IGU_17_SELECT_2 />
          <IGU_17_INP_2 />
          <IGU_17_INP_1 />
          <div className="d-flex mt-3 gap-2">
            <IGU_17_BTN_1 />
            <IGU_17_BTN_2 />
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
