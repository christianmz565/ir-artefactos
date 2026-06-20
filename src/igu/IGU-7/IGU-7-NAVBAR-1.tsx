import { IGU_7_BTN_1 } from "./IGU-7-BTN-1";
import { IGU_7_SELECT_1 } from "./IGU-7-SELECT-1";
import { IGU_7_SRCH_1 } from "./IGU-7-SRCH-1";

export function IGU_7_NAVBAR_1() {
  return (
    <div className="d-flex justify-content-between mb-4 flex-wrap gap-3 align-items-center">
      <h1 className="mb-0">Gestión de Estudiantes</h1>
      <div className="d-flex gap-3 align-items-center">
        <IGU_7_SRCH_1 />
        <IGU_7_SELECT_1 />
        <IGU_7_BTN_1 />
      </div>
    </div>
  );
}
