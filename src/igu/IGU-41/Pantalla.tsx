import Container from "react-bootstrap/Container";
import { IGU_41_FORM_1 } from "./IGU-41-FORM-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Editar Plataforma</h1>
      <IGU_41_FORM_1 />
    </Container>
  );
}
