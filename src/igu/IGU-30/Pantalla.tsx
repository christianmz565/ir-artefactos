import Container from "react-bootstrap/Container";
import { IGU_30_FORM_1 } from "./IGU-30-FORM-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Editar Configuración de Notificación</h1>
      <IGU_30_FORM_1 />
    </Container>
  );
}
