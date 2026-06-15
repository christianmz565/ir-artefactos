import type { Student } from "@/types/student";
import { EmptyState } from "./EmptyState";
import { StudentRow } from "./StudentRow";

interface StudentTableBodyProps {
  students: Student[];
}

export function StudentTableBody({ students }: StudentTableBodyProps) {
  return (
    <tbody>
      {students.length === 0 ? (
        <EmptyState />
      ) : (
        students.map((s) => (
          <StudentRow
            key={s.id}
            id={s.id}
            name={s.name}
            email={s.email}
            course={s.course}
          />
        ))
      )}
    </tbody>
  );
}
