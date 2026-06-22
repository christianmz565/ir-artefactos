import { IGU_22_TAB_3_BTN_1 } from "./IGU-22-TAB-3-BTN-1";
import { IGU_22_TAB_3_BTN_2 } from "./IGU-22-TAB-3-BTN-2";

export function IGU_22_TAB_3() {
  return (
    <tr>
      <td>2026-06-15</td>
      <td>Juan Pérez García</td>
      <td>07:45:00</td>
      <td>Entrada</td>
      <td>
        <span className="badge bg-success">Presente</span>
      </td>
      <td>
        <div className="d-flex gap-1">
          <IGU_22_TAB_3_BTN_1 id="1" />
          <IGU_22_TAB_3_BTN_2 id="1" />
        </div>
      </td>
    </tr>
  );
}
