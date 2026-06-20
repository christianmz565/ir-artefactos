import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { IGU_9_BTN_1 } from "./IGU-9-BTN-1";
import { IGU_9_BTN_2 } from "./IGU-9-BTN-2";
import { IGU_9_FORM_1 } from "./IGU-9-FORM-1";
import { IGU_9_INP_1 } from "./IGU-9-INP-1";
import { IGU_9_INP_2 } from "./IGU-9-INP-2";
import { IGU_9_INP_3 } from "./IGU-9-INP-3";
import { IGU_9_INP_4 } from "./IGU-9-INP-4";
import { IGU_9_INP_5 } from "./IGU-9-INP-5";
import { IGU_9_SELECT_1 } from "./IGU-9-SELECT-1";

export function IGU_9_FORM_2() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Registrar Nuevo Profesor</Card.Title>
        <Form>
          <div className="row">
            <div className="col-md-6">
              <IGU_9_INP_1 />
            </div>
            <div className="col-md-6">
              <IGU_9_INP_2 />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <IGU_9_SELECT_1 />
            </div>
            <div className="col-md-8">
              <IGU_9_INP_3 />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <IGU_9_INP_4 />
            </div>
            <div className="col-md-6">
              <IGU_9_INP_5 />
            </div>
          </div>
          <IGU_9_FORM_1 />
          <div className="d-flex mt-3 gap-2">
            <IGU_9_BTN_1 />
            <IGU_9_BTN_2 />
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
