import Container from "react-bootstrap/Container";
import { IGU_18_BTN_1 } from "./IGU-18-BTN-1";
import { IGU_18_FORM_1 } from "./IGU-18-FORM-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <IGU_18_BTN_1 />
      <h1 className="mb-4">Detalle de Notificación</h1>
      <IGU_18_FORM_1 />
    </Container>
  );
}
