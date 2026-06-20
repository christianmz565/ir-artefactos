import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { IGU_3_BTN_1 } from "./IGU-3-BTN-1";
import { IGU_3_BTN_2 } from "./IGU-3-BTN-2";
import { IGU_3_INP_1 } from "./IGU-3-INP-1";
import { IGU_3_INP_2 } from "./IGU-3-INP-2";
import { IGU_3_INP_3 } from "./IGU-3-INP-3";
import { IGU_3_INP_4 } from "./IGU-3-INP-4";
import { IGU_3_INP_5 } from "./IGU-3-INP-5";
import { IGU_3_SELECT_1 } from "./IGU-3-SELECT-1";
import { IGU_3_SELECT_2 } from "./IGU-3-SELECT-2";

export function IGU_3_FORM_1() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Editar Auxiliar</Card.Title>
        <Form>
          <IGU_3_INP_1 />
          <IGU_3_INP_2 />
          <div className="d-flex gap-3 align-items-end">
            <IGU_3_SELECT_1 />
            <IGU_3_INP_3 />
          </div>
          <IGU_3_INP_4 />
          <IGU_3_INP_5 />
          <IGU_3_SELECT_2 />
          <div className="d-flex mt-3 gap-2">
            <IGU_3_BTN_1 />
            <IGU_3_BTN_2 />
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
