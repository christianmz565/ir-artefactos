import Container from "react-bootstrap/Container";
import { IGU_25_FORM_2 } from "./IGU-25-FORM-2";

export function Pantalla() {
  return (
    <Container className="py-4">
      <div className="d-flex align-items-center gap-3 mb-4">
        <h1 className="mb-0">Generador de Reportes</h1>
      </div>
      <IGU_25_FORM_2 />
    </Container>
  );
}
