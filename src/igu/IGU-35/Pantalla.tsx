import Container from "react-bootstrap/Container";
import { IGU_35_FORM_1 } from "./IGU-35-FORM-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Registrar Rol de Sistema</h1>
      <IGU_35_FORM_1 />
    </Container>
  );
}
