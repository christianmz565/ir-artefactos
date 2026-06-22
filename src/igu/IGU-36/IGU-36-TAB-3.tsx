import { IGU_36_TAB_3_BTN_1 } from "./IGU-36-TAB-3-BTN-1";
import { IGU_36_TAB_3_BTN_2 } from "./IGU-36-TAB-3-BTN-2";
import { IGU_36_TAB_3_BTN_3 } from "./IGU-36-TAB-3-BTN-3";

export function IGU_36_TAB_3() {
  return (
    <tr>
      <td>1</td>
      <td>Administrador</td>
      <td>Gestión de Auxiliares, Gestión de Estudiantes</td>
      <td>Active</td>
      <td>
        <div className="d-flex gap-1">
          <IGU_36_TAB_3_BTN_1 id="1" />
          <IGU_36_TAB_3_BTN_2 id="1" />
          <IGU_36_TAB_3_BTN_3 id="1" />
        </div>
      </td>
    </tr>
  );
}
