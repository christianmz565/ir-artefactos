import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { MOCK_ASISTENCIAS } from "@/mocks/asistencias";
import { AttendanceTableBody } from "./AttendanceTableBody";

export function AttendanceTable() {
  return (
    <Card>
      <Table className="mb-0" hover>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Estudiante</th>
            <th>Hora</th>
            <th>Tipo</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <AttendanceTableBody assistances={MOCK_ASISTENCIAS} />
      </Table>
    </Card>
  );
}
