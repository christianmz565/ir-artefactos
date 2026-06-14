import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { Button } from "../BTN";

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
    <Card>
      <Table className="mb-0" hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo electrónico</th>
            <th>Curso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center text-muted py-4">
                &#x2205; No se encontraron estudiantes
              </td>
            </tr>
          ) : (
            students.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.course}</td>
                <td>
                  <div className="d-flex gap-1">
                    <Button size="sm" onClick={() => onEdit(s)}>
                      Editar
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => onDelete(s.id)}
                    >
                      Eliminar
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Card>
  );
}
