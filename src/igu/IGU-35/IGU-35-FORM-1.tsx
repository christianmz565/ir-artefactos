import Form from "react-bootstrap/Form";
import { IGU_35_BTN_1 } from "./IGU-35-BTN-1";
import { IGU_35_BTN_2 } from "./IGU-35-BTN-2";
import { IGU_35_INP_1 } from "./IGU-35-INP-1";
import { IGU_35_INP_2 } from "./IGU-35-INP-2";
import { IGU_35_TAB_1 } from "./IGU-35-TAB-1";

export function IGU_35_FORM_1() {
  return (
    <Form>
      <div className="mb-3">
        <IGU_35_INP_1 />
      </div>

      <IGU_35_INP_2 />

      <div className="mb-4">
        <h5 className="mb-3">Matriz de Permisos</h5>
        <IGU_35_TAB_1 />
      </div>

      <div className="d-flex gap-2">
        <IGU_35_BTN_1 />
        <IGU_35_BTN_2 />
      </div>
    </Form>
  );
}
