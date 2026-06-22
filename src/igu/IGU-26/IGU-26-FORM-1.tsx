import { IGU_26_BTN_1 } from "./IGU-26-BTN-1";
import { IGU_26_BTN_2 } from "./IGU-26-BTN-2";
import { IGU_26_INP_1 } from "./IGU-26-INP-1";
import { IGU_26_INP_2 } from "./IGU-26-INP-2";
import { IGU_26_SELECT_1 } from "./IGU-26-SELECT-1";
import { IGU_26_SELECT_2 } from "./IGU-26-SELECT-2";
import { IGU_26_SRCH_1 } from "./IGU-26-SRCH-1";

export function IGU_26_FORM_1() {
  return (
    <div className="d-flex justify-content-between mb-4 flex-wrap gap-3 align-items-end">
      <div className="d-flex gap-3 align-items-end flex-wrap">
        <IGU_26_SRCH_1 />
        <IGU_26_INP_1 />
        <IGU_26_INP_2 />
        <IGU_26_SELECT_1 />
        <IGU_26_SELECT_2 />
      </div>
      <div className="d-flex gap-2">
        <IGU_26_BTN_1 />
        <IGU_26_BTN_2 />
      </div>
    </div>
  );
}
