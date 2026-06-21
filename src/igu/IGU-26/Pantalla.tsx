import Container from "react-bootstrap/Container";
import { IGU_26_FORM_1 } from "./IGU-26-FORM-1";
import { IGU_26_TAB_4 } from "./IGU-26-TAB-4";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Consulta de Notificaciones</h1>
      <IGU_26_FORM_1 />
      <IGU_26_TAB_4 />
    </Container>
  );
}
