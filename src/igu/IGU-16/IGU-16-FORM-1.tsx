import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { IGU_16_BTN_1 } from "./IGU-16-BTN-1";
import { IGU_16_BTN_2 } from "./IGU-16-BTN-2";
import { IGU_16_INP_1 } from "./IGU-16-INP-1";
import { IGU_16_INP_2 } from "./IGU-16-INP-2";
import { IGU_16_INP_3 } from "./IGU-16-INP-3";
import { IGU_16_INP_4 } from "./IGU-16-INP-4";
import { IGU_16_SELECT_1 } from "./IGU-16-SELECT-1";
import { IGU_16_SELECT_2 } from "./IGU-16-SELECT-2";

export function IGU_16_FORM_1() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Registrar Asistencia</Card.Title>
        <Form>
          <div className="row">
            <div className="col-md-6">
              <IGU_16_INP_1 />
            </div>
            <div className="col-md-6">
              <IGU_16_INP_2 />
            </div>
          </div>
          <IGU_16_INP_3 />
          <div className="row">
            <div className="col-md-6">
              <IGU_16_SELECT_1 />
            </div>
            <div className="col-md-6">
              <IGU_16_SELECT_2 />
            </div>
          </div>
          <IGU_16_INP_4 />
          <div className="d-flex mt-3 gap-2">
            <IGU_16_BTN_1 />
            <IGU_16_BTN_2 />
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
