import Container from "react-bootstrap/Container";
import { IGU_24_BTN_1 } from "./IGU-24-BTN-1";
import { IGU_24_FORM_1 } from "./IGU-24-FORM-1";
import { IGU_24_MDL_1 } from "./IGU-24-MDL-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <IGU_24_BTN_1 />
      <h1 className="mb-4">Detalle de Reporte Generado</h1>
      <IGU_24_FORM_1 />
      <IGU_24_MDL_1 />
    </Container>
  );
}
