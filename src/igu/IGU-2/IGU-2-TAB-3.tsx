import type { Auxiliar } from "@/types/auxiliar";
import { IGU_2_TAB_3_BTN_1 } from "./IGU-2-TAB-3-BTN-1";
import { IGU_2_TAB_3_BTN_2 } from "./IGU-2-TAB-3-BTN-2";
import { IGU_2_TAB_3_BTN_3 } from "./IGU-2-TAB-3-BTN-3";

export function IGU_2_TAB_3({ auxiliar }: { auxiliar: Auxiliar }) {
  return (
    <tr>
      <td>{auxiliar.id}</td>
      <td>{`${auxiliar.firstName} ${auxiliar.lastName}`}</td>
      <td>{`${auxiliar.documentType} - ${auxiliar.documentNumber}`}</td>
      <td>{auxiliar.email}</td>
      <td>{auxiliar.phone}</td>
      <td>{auxiliar.status}</td>
      <td>
        <div className="d-flex gap-1">
          <IGU_2_TAB_3_BTN_1 id={String(auxiliar.id)} />
          <IGU_2_TAB_3_BTN_2 id={String(auxiliar.id)} />
          <IGU_2_TAB_3_BTN_3
            id={String(auxiliar.id)}
            disabled={auxiliar.status === "Inactive"}
          />
        </div>
      </td>
    </tr>
  );
}
