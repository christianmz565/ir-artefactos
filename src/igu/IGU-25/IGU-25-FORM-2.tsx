import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { IGU_25_BTN_1 } from "./IGU-25-BTN-1";
import { IGU_25_FORM_1 } from "./IGU-25-FORM-1";
import { IGU_25_INP_1 } from "./IGU-25-INP-1";
import { IGU_25_INP_2 } from "./IGU-25-INP-2";
import { IGU_25_INP_3 } from "./IGU-25-INP-3";
import { IGU_25_SELECT_1 } from "./IGU-25-SELECT-1";
import { IGU_25_SELECT_2 } from "./IGU-25-SELECT-2";

export function IGU_25_FORM_2() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Configurar Reporte</Card.Title>
        <Form>
          <div className="row">
            <div className="col-md-6">
              <IGU_25_INP_1 />
            </div>
            <div className="col-md-6">
              <IGU_25_INP_2 />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <IGU_25_SELECT_1 />
            </div>
            <div className="col-md-6">
              <IGU_25_SELECT_2 />
            </div>
          </div>
          <IGU_25_INP_3 />
          <IGU_25_FORM_1 />
          <IGU_25_BTN_1 />
        </Form>
      </Card.Body>
    </Card>
  );
}
