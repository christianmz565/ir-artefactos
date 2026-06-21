import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { IGU_41_BTN_1 } from "./IGU-41-BTN-1";
import { IGU_41_BTN_2 } from "./IGU-41-BTN-2";
import { IGU_41_INP_1 } from "./IGU-41-INP-1";
import { IGU_41_INP_2 } from "./IGU-41-INP-2";
import { IGU_41_INP_3 } from "./IGU-41-INP-3";

export function IGU_41_FORM_1() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Editar Plataforma</Card.Title>
        <Form>
          <IGU_41_INP_1 />
          <IGU_41_INP_2 />
          <IGU_41_INP_3 />
          <div className="d-flex mt-3 gap-2">
            <IGU_41_BTN_1 />
            <IGU_41_BTN_2 />
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
