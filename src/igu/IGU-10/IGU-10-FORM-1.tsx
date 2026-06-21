import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { IGU_10_BTN_1 } from "./IGU-10-BTN-1";
import { IGU_10_BTN_2 } from "./IGU-10-BTN-2";
import { IGU_10_INP_1 } from "./IGU-10-INP-1";
import { IGU_10_INP_2 } from "./IGU-10-INP-2";
import { IGU_10_INP_3 } from "./IGU-10-INP-3";
import { IGU_10_INP_4 } from "./IGU-10-INP-4";

export function IGU_10_FORM_1() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Editar Profesor</Card.Title>
        <Form>
          <div className="row">
            <div className="col-md-6">
              <IGU_10_INP_1 />
            </div>
            <div className="col-md-6">
              <IGU_10_INP_2 />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <IGU_10_INP_3 />
            </div>
            <div className="col-md-6">
              <IGU_10_INP_4 />
            </div>
          </div>
          <div className="d-flex mt-3 gap-2">
            <IGU_10_BTN_1 />
            <IGU_10_BTN_2 />
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
