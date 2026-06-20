import Container from "react-bootstrap/Container";
import { IGU_6_FORM_1 } from "./IGU-6-FORM-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Crear Estudiante</h1>
      <IGU_6_FORM_1 />
    </Container>
  );
}
