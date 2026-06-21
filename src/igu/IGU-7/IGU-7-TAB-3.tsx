import { Button } from "@/components/Button/Button";
import type { Student } from "@/types/student";

export function IGU_7_TAB_3({ student }: { student: Student }) {
  return (
    <tr>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>{student.course}</td>
      <td>
        <div className="d-flex gap-1">
          <Button size="sm" id={`igu-7-tab-3-edit-${student.id}`}>
            Editar
          </Button>
          <Button
            size="sm"
            variant="danger"
            id={`igu-7-tab-3-del-${student.id}`}
          >
            Eliminar
          </Button>
        </div>
      </td>
    </tr>
  );
}
