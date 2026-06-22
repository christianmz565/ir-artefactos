import { IGU_40_TAB_3_BTN_1 } from "./IGU-40-TAB-3-BTN-1";
import { IGU_40_TAB_3_BTN_2 } from "./IGU-40-TAB-3-BTN-2";
import { IGU_40_TAB_3_BTN_3 } from "./IGU-40-TAB-3-BTN-3";

export function IGU_40_TAB_3() {
  return (
    <tr>
      <td>1</td>
      <td>WhatsApp Business</td>
      <td>https://graph.facebook.com/v17.0</td>
      <td>EAAB...</td>
      <td>
        <span className="badge bg-success">Active</span>
      </td>
      <td>
        <div className="d-flex gap-1">
          <IGU_40_TAB_3_BTN_1 id="1" />
          <IGU_40_TAB_3_BTN_2 id="1" />
          <IGU_40_TAB_3_BTN_3 id="1" />
        </div>
      </td>
    </tr>
  );
}
