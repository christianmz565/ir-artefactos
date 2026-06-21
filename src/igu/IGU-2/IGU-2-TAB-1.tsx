import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { MOCK_AUXILIARES } from "@/mocks/auxiliars";
import { IGU_2_TAB_2 } from "./IGU-2-TAB-2";

export function IGU_2_TAB_1() {
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
        <IGU_2_TAB_2 auxiliares={MOCK_AUXILIARES} />
      </Table>
    </Card>
  );
}
