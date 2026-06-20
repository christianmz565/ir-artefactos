import { IGU_22_BTN_1 } from "./IGU-22-BTN-1";
import { IGU_22_SRCH_1 } from "./IGU-22-SRCH-1";

export function IGU_22_NAVBAR_1() {
  return (
    <div className="d-flex justify-content-between mb-4 flex-wrap gap-3 align-items-center">
      <h1 className="mb-0">Consulta de Asistencias</h1>
      <div className="d-flex gap-3 align-items-center">
        <IGU_22_SRCH_1 />
        <IGU_22_BTN_1 />
      </div>
    </div>
  );
}
