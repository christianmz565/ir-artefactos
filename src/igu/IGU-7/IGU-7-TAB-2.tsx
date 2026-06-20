import type { Student } from "@/types/student";
import { IGU_7_ALT_1 } from "./IGU-7-ALT-1";
import { IGU_7_TAB_3 } from "./IGU-7-TAB-3";

export function IGU_7_TAB_2({ students }: { students: Student[] }) {
  return (
    <tbody>
      {students.length === 0 ? (
        <IGU_7_ALT_1 />
      ) : (
        students.map((s) => <IGU_7_TAB_3 key={s.id} student={s} />)
      )}
    </tbody>
  );
}
