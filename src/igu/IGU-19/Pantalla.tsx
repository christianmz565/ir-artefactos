import Container from "react-bootstrap/Container";
import { IGU_19_FORM_1 } from "./IGU-19-FORM-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Editar Asistencia</h1>
      <IGU_19_FORM_1 />
    </Container>
  );
}
