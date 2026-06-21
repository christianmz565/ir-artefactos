import Container from "react-bootstrap/Container";
import { IGU_39_FORM_1 } from "./IGU-39-FORM-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Registrar Plataforma</h1>
      <IGU_39_FORM_1 />
    </Container>
  );
}
