import Container from "react-bootstrap/Container";
import { EliminarNotificacionCard } from "./EliminarNotificacionCard/EliminarNotificacionCard";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Eliminar Notificación</h1>
      <EliminarNotificacionCard />
    </Container>
  );
}
