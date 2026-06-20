import Container from "react-bootstrap/Container";
import { IGU_11_BTN_1 } from "./IGU-11-BTN-1";
import { IGU_11_FORM_1 } from "./IGU-11-FORM-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <IGU_11_BTN_1 />
      <h1 className="mb-4">Detalle del Profesor</h1>
      <IGU_11_FORM_1 />
    </Container>
  );
}
