import Container from "react-bootstrap/Container";
import { IGU_21_FORM_1 } from "./IGU-21-FORM-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Editar Parámetros del Reporte</h1>
      <IGU_21_FORM_1 />
    </Container>
  );
}
