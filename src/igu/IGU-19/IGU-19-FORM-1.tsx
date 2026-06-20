import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { IGU_19_BTN_1 } from "./IGU-19-BTN-1";
import { IGU_19_BTN_2 } from "./IGU-19-BTN-2";
import { IGU_19_INP_1 } from "./IGU-19-INP-1";
import { IGU_19_INP_2 } from "./IGU-19-INP-2";
import { IGU_19_INP_3 } from "./IGU-19-INP-3";
import { IGU_19_SELECT_1 } from "./IGU-19-SELECT-1";
import { IGU_19_SELECT_2 } from "./IGU-19-SELECT-2";

export function IGU_19_FORM_1() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Editar Asistencia</Card.Title>
        <Form>
          <div className="row">
            <div className="col-md-6">
              <IGU_19_INP_1 />
            </div>
            <div className="col-md-6">
              <IGU_19_INP_2 />
            </div>
          </div>
          <IGU_19_INP_3 />
          <div className="row">
            <div className="col-md-6">
              <IGU_19_SELECT_1 />
            </div>
            <div className="col-md-6">
              <IGU_19_SELECT_2 />
            </div>
          </div>
          <div className="d-flex mt-3 gap-2">
            <IGU_19_BTN_1 />
            <IGU_19_BTN_2 />
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
