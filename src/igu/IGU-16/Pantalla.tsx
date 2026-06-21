import Container from "react-bootstrap/Container";
import { IGU_16_FORM_1 } from "./IGU-16-FORM-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Registrar Asistencia</h1>
      <IGU_16_FORM_1 />
    </Container>
  );
}
