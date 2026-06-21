import Form from "react-bootstrap/Form";
import { IGU_30_BTN_1 } from "./IGU-30-BTN-1";
import { IGU_30_BTN_2 } from "./IGU-30-BTN-2";
import { IGU_30_INP_1 } from "./IGU-30-INP-1";
import { IGU_30_INP_2 } from "./IGU-30-INP-2";
import { IGU_30_SELECT_1 } from "./IGU-30-SELECT-1";

export function IGU_30_FORM_1() {
  return (
    <Form>
      <IGU_30_SELECT_1 />
      <div className="mt-3">
        <IGU_30_INP_1 />
      </div>
      <div className="mt-3 mb-4">
        <IGU_30_INP_2 />
      </div>
      <div className="d-flex gap-2">
        <IGU_30_BTN_1 />
        <IGU_30_BTN_2 />
      </div>
    </Form>
  );
}
