import type { Student } from "@/types/student";
import { IGU_7_TAB_3_BTN_1 } from "./IGU-7-TAB-3-BTN-1";
import { IGU_7_TAB_3_BTN_2 } from "./IGU-7-TAB-3-BTN-2";
import { IGU_7_TAB_3_BTN_3 } from "./IGU-7-TAB-3-BTN-3";

export function IGU_7_TAB_3({ student }: { student: Student }) {
  return (
    <tr>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>{student.course}</td>
      <td>
        <div className="d-flex gap-1">
          <IGU_7_TAB_3_BTN_3 id={String(student.id)} />
          <IGU_7_TAB_3_BTN_1 id={String(student.id)} />
          <IGU_7_TAB_3_BTN_2 id={String(student.id)} />
        </div>
      </td>
    </tr>
  );
}
