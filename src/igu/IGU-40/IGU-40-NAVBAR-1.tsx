import { IGU_40_BTN_1 } from "./IGU-40-BTN-1";
import { IGU_40_SELECT_1 } from "./IGU-40-SELECT-1";
import { IGU_40_SRCH_1 } from "./IGU-40-SRCH-1";

export function IGU_40_NAVBAR_1() {
  return (
    <div className="d-flex justify-content-between mb-4 flex-wrap gap-3 align-items-center">
      <h1 className="mb-0">Gestión de Plataformas</h1>
      <div className="d-flex gap-3 align-items-center">
        <IGU_40_SRCH_1 />
        <IGU_40_SELECT_1 />
        <IGU_40_BTN_1 />
      </div>
    </div>
  );
}
