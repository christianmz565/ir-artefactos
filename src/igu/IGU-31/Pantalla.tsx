import Container from "react-bootstrap/Container";
import { IGU_31_FORM_1 } from "./IGU-31-FORM-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Registrar Apoderado</h1>
      <IGU_31_FORM_1 />
    </Container>
  );
}
