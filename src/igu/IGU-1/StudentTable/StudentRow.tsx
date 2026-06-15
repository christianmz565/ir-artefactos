import { Button } from "@/components/Button/Button";
import type { Student } from "@/types/student";

interface StudentRowProps
  extends Pick<Student, "id" | "name" | "email" | "course"> {
  onEdit?: () => void;
  onDelete?: () => void;
}

export function StudentRow({
  id,
  name,
  email,
  course,
  onEdit,
  onDelete,
}: StudentRowProps) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{course}</td>
      <td>
        <div className="d-flex gap-1">
          <Button size="sm" onClick={onEdit} id={`edit-student-${id}`}>
            Editar
          </Button>
          <Button
            size="sm"
            variant="danger"
            onClick={onDelete}
            id={`delete-student-${id}`}
          >
            Eliminar
          </Button>
        </div>
      </td>
    </tr>
  );
}
