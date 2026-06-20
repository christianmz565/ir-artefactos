import Container from "react-bootstrap/Container";
import { IGU_1_FORM_1 } from "./IGU-1-FORM-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Crear Auxiliar</h1>
      <IGU_1_FORM_1 />
    </Container>
  );
}
