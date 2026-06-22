import type { Guardian } from "@/types/apoderado";
import { IGU_32_TAB_3_BTN_1 } from "./IGU-32-TAB-3-BTN-1";
import { IGU_32_TAB_3_BTN_2 } from "./IGU-32-TAB-3-BTN-2";
import { IGU_32_TAB_3_BTN_3 } from "./IGU-32-TAB-3-BTN-3";

export function IGU_32_TAB_3({ guardian }: { guardian: Guardian }) {
  const isActive = guardian.status === "Active";
  return (
    <tr>
      <td>{guardian.id}</td>
      <td>
        {guardian.firstName} {guardian.lastName}
      </td>
      <td>
        {guardian.documentType}: {guardian.documentNumber}
      </td>
      <td>{guardian.relationship}</td>
      <td>
        <div>{guardian.email}</div>
        <small className="text-muted">{guardian.phone}</small>
      </td>
      <td>{guardian.associatedStudents.length} asociados</td>
      <td>
        <span className={`badge bg-${isActive ? "success" : "secondary"}`}>
          {guardian.status}
        </span>
      </td>
      <td>
        <div className="d-flex gap-2">
          <IGU_32_TAB_3_BTN_1 id={String(guardian.id)} />
          <IGU_32_TAB_3_BTN_2 id={String(guardian.id)} />
          <IGU_32_TAB_3_BTN_3 id={String(guardian.id)} isActive={isActive} />
        </div>
      </td>
    </tr>
  );
}
