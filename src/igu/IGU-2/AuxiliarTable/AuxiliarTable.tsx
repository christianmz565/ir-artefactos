import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { MOCK_AUXILIARES } from "@/mocks/auxiliars";
import { AuxiliarTableBody } from "./AuxiliarTableBody";

export function AuxiliarTable() {
  return (
    <Card>
      <Table className="mb-0" hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre completo</th>
            <th>Documento</th>
            <th>Correo electrónico</th>
            <th>Teléfono</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <AuxiliarTableBody auxiliares={MOCK_AUXILIARES} />
      </Table>
    </Card>
  );
}
