import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { IGU_8_BTN_1 } from "./IGU-8-BTN-1";
import { IGU_8_BTN_2 } from "./IGU-8-BTN-2";
import { IGU_8_INP_1 } from "./IGU-8-INP-1";
import { IGU_8_INP_2 } from "./IGU-8-INP-2";
import { IGU_8_SELECT_1 } from "./IGU-8-SELECT-1";

export function IGU_8_FORM_1() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Editar Estudiante</Card.Title>
        <Form>
          <IGU_8_INP_1 />
          <IGU_8_INP_2 />
          <IGU_8_SELECT_1 />
          <div className="d-flex mt-3 gap-2">
            <IGU_8_BTN_1 />
            <IGU_8_BTN_2 />
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
