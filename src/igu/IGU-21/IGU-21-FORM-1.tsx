import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { IGU_21_BTN_1 } from "./IGU-21-BTN-1";
import { IGU_21_BTN_2 } from "./IGU-21-BTN-2";
import { IGU_21_INP_1 } from "./IGU-21-INP-1";
import { IGU_21_INP_2 } from "./IGU-21-INP-2";
import { IGU_21_SELECT_1 } from "./IGU-21-SELECT-1";
import { IGU_21_SELECT_2 } from "./IGU-21-SELECT-2";

export function IGU_21_FORM_1() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Editar Parámetros del Reporte</Card.Title>
        <Form>
          <div className="row">
            <div className="col-md-6">
              <IGU_21_INP_1 />
            </div>
            <div className="col-md-6">
              <IGU_21_INP_2 />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <IGU_21_SELECT_1 />
            </div>
            <div className="col-md-6">
              <IGU_21_SELECT_2 />
            </div>
          </div>
          <div className="d-flex mt-3 gap-2">
            <IGU_21_BTN_1 />
            <IGU_21_BTN_2 />
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
