import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { MOCK_STUDENTS } from "@/mocks/students";
import { StudentTableBody } from "./StudentTableBody";

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
        <StudentTableBody students={MOCK_STUDENTS} />
      </Table>
    </Card>
  );
}
