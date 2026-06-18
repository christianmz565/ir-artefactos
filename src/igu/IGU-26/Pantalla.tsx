import Container from "react-bootstrap/Container";
import { Filters } from "./Filters/Filters";
import { NotificationTable } from "./NotificationTable/NotificationTable";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Consulta de Notificaciones</h1>
      <Filters />
      <NotificationTable />
    </Container>
  );
}
