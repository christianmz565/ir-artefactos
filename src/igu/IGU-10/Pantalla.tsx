import Container from "react-bootstrap/Container";
import { IGU_10_FORM_1 } from "./IGU-10-FORM-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Editar Profesor</h1>
      <IGU_10_FORM_1 />
    </Container>
  );
}
