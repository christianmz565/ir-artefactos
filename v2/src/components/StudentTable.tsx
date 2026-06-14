import Table from "react-bootstrap/Table";
import { ActionButton } from "./ActionButton";

export interface Student {
  id: number;
  name: string;
  email: string;
  course: string;
}

interface StudentTableProps {
  students: Student[];
  onEdit: (student: Student) => void;
  onDelete: (id: number) => void;
}

export function StudentTable({ students, onEdit, onDelete }: StudentTableProps) {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Course</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.name}</td>
            <td>{s.email}</td>
            <td>{s.course}</td>
            <td>
              <div className="d-flex gap-1">
                <ActionButton size="sm" onClick={() => onEdit(s)}>
                  Edit
                </ActionButton>
                <ActionButton
                  size="sm"
                  variant="danger"
                  onClick={() => onDelete(s.id)}
                >
                  Delete
                </ActionButton>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
