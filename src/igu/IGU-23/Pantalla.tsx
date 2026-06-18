import Container from "react-bootstrap/Container";
import { DeleteConfirm } from "./DeleteConfirm/DeleteConfirm";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Eliminar Asistencia</h1>
      <DeleteConfirm />
    </Container>
  );
}
