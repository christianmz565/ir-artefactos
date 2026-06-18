import Container from "react-bootstrap/Container";
import { DetalleAsistencia } from "./DetaillsAsistencia/Detaills";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Detalle de Asistencia</h1>
      <DetalleAsistencia />
    </Container>
  );
}
