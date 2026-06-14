import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { Button } from "@/components/Button/Button";
import { MOCK_STUDENTS } from "@/mocks/students";

export function StudentTable() {
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
          {MOCK_STUDENTS.length === 0 ? (
            <tr>
              <td colSpan={5} className="py-4 text-center text-muted">
                &#x2205; No se encontraron estudiantes
              </td>
            </tr>
          ) : (
            MOCK_STUDENTS.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.course}</td>
                <td>
                  <div className="d-flex gap-1">
                    <Button size="sm">Editar</Button>
                    <Button size="sm" variant="danger">
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
