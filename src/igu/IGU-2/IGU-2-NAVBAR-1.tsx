import { IGU_2_BTN_1 } from "./IGU-2-BTN-1";
import { IGU_2_SELECT_1 } from "./IGU-2-SELECT-1";
import { IGU_2_SRCH_1 } from "./IGU-2-SRCH-1";

export function IGU_2_NAVBAR_1() {
  return (
    <div className="d-flex justify-content-between mb-4 flex-wrap gap-3 align-items-center">
      <h1 className="mb-0">Gestión de Auxiliares</h1>
      <div className="d-flex gap-3 align-items-center">
        <IGU_2_SRCH_1 />
        <IGU_2_SELECT_1 />
        <IGU_2_BTN_1 />
      </div>
    </div>
  );
}
