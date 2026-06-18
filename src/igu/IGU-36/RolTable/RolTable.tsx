import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { MOCK_ROLES } from "@/mocks/roles";
import { RolTableBody } from "./RolTableBody";

export function RolTable() {
  return (
    <Card>
      <Table className="mb-0" hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Permisos</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <RolTableBody roles={MOCK_ROLES} />
      </Table>
    </Card>
  );
}
