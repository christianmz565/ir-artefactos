import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { IGU_6_BTN_1 } from "./IGU-6-BTN-1";
import { IGU_6_BTN_2 } from "./IGU-6-BTN-2";
import { IGU_6_INP_1 } from "./IGU-6-INP-1";
import { IGU_6_INP_2 } from "./IGU-6-INP-2";
import { IGU_6_SELECT_1 } from "./IGU-6-SELECT-1";

export function IGU_6_FORM_1() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Agregar Nuevo Estudiante</Card.Title>
        <Form>
          <IGU_6_INP_1 />
          <IGU_6_INP_2 />
          <IGU_6_SELECT_1 />
          <div className="d-flex mt-3 gap-2">
            <IGU_6_BTN_1 />
            <IGU_6_BTN_2 />
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
