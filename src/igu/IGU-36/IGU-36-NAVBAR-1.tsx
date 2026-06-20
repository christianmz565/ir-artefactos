import { IGU_36_BTN_1 } from "./IGU-36-BTN-1";
import { IGU_36_SELECT_1 } from "./IGU-36-SELECT-1";
import { IGU_36_SRCH_1 } from "./IGU-36-SRCH-1";

export function IGU_36_NAVBAR_1() {
  return (
    <div className="d-flex justify-content-between mb-4 flex-wrap gap-3 align-items-center">
      <h1 className="mb-0">Gestión de Roles</h1>
      <div className="d-flex gap-3 align-items-center">
        <IGU_36_SRCH_1 />
        <IGU_36_SELECT_1 />
        <IGU_36_BTN_1 />
      </div>
    </div>
  );
}
