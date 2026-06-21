import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { IGU_37_BTN_1 } from "./IGU-37-BTN-1";
import { IGU_37_BTN_2 } from "./IGU-37-BTN-2";
import { IGU_37_INP_1 } from "./IGU-37-INP-1";
import { IGU_37_SELECT_1 } from "./IGU-37-SELECT-1";

export function IGU_37_FORM_1() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Editar Rol</Card.Title>
        <Form>
          <IGU_37_INP_1 />
          <IGU_37_SELECT_1 />
          <div className="d-flex mt-3 gap-2">
            <IGU_37_BTN_1 />
            <IGU_37_BTN_2 />
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
