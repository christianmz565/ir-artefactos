import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { MOCK_NOTIFICACIONES } from "@/mocks/notificaciones";
import { NotificationTableBody } from "./NotificationTableBody";

export function NotificationTable() {
  return (
    <Card>
      <Table className="mb-0" hover>
        <thead>
          <tr>
            <th>Fecha/Hora</th>
            <th>Apoderado destino</th>
            <th>Mensaje</th>
            <th>Plataforma</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <NotificationTableBody notifications={MOCK_NOTIFICACIONES} />
      </Table>
    </Card>
  );
}
