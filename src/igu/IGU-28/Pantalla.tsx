import Container from "react-bootstrap/Container";
import { IGU_28_BTN_1 } from "./IGU-28-BTN-1";
import { IGU_28_FORM_1 } from "./IGU-28-FORM-1";
import { IGU_28_FORM_2 } from "./IGU-28-FORM-2";
import { IGU_28_FORM_3 } from "./IGU-28-FORM-3";

export function Pantalla() {
  return (
    <Container className="py-4">
      <IGU_28_BTN_1 />
      <h1 className="mb-4">Detalle de Asistencia</h1>
      <IGU_28_FORM_1 />
      <IGU_28_FORM_2 />
      <IGU_28_FORM_3 />
    </Container>
  );
}
