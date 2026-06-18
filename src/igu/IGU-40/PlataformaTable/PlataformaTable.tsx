import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { MOCK_PLATAFORMAS } from "@/mocks/plataformas";
import { PlataformaTableBody } from "./PlataformaTableBody";

export function PlataformaTable() {
  return (
    <Card>
      <Table className="mb-0" hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>URL</th>
            <th>API Key</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <PlataformaTableBody plataformas={MOCK_PLATAFORMAS} />
      </Table>
    </Card>
  );
}
