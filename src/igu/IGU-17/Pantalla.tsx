import Container from "react-bootstrap/Container";
import { IGU_17_FORM_1 } from "./IGU-17-FORM-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Crear Notificación</h1>
      <IGU_17_FORM_1 />
    </Container>
  );
}
