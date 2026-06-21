import Container from "react-bootstrap/Container";
import { IGU_14_BTN_1 } from "./IGU-14-BTN-1";
import { IGU_14_FORM_1 } from "./IGU-14-FORM-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <IGU_14_BTN_1 />
      <h1 className="mb-4">Detalle del Estudiante</h1>
      <IGU_14_FORM_1 />
    </Container>
  );
}
