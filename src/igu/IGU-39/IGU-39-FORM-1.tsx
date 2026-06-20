import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { IGU_39_BTN_1 } from "./IGU-39-BTN-1";
import { IGU_39_BTN_2 } from "./IGU-39-BTN-2";
import { IGU_39_INP_1 } from "./IGU-39-INP-1";
import { IGU_39_INP_2 } from "./IGU-39-INP-2";
import { IGU_39_INP_3 } from "./IGU-39-INP-3";

export function IGU_39_FORM_1() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Registrar Nueva Plataforma</Card.Title>
        <Form>
          <IGU_39_INP_1 />
          <IGU_39_INP_2 />
          <IGU_39_INP_3 />
          <div className="d-flex mt-3 gap-2">
            <IGU_39_BTN_1 />
            <IGU_39_BTN_2 />
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
