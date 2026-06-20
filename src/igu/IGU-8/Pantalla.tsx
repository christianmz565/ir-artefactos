import Container from "react-bootstrap/Container";
import { IGU_8_FORM_1 } from "./IGU-8-FORM-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Editar Estudiante</h1>
      <IGU_8_FORM_1 />
    </Container>
  );
}
