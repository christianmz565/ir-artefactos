import { IGU_15_BTN_1 } from "./IGU-15-BTN-1";
import { IGU_15_SELECT_1 } from "./IGU-15-SELECT-1";
import { IGU_15_SRCH_1 } from "./IGU-15-SRCH-1";

export function IGU_15_NAVBAR_1() {
  return (
    <div className="d-flex justify-content-between mb-4 flex-wrap gap-3 align-items-center">
      <h1 className="mb-0">Gestión de Profesores</h1>
      <div className="d-flex gap-3 align-items-center">
        <IGU_15_SRCH_1 />
        <IGU_15_SELECT_1 />
        <IGU_15_BTN_1 />
      </div>
    </div>
  );
}
