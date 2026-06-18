import Container from "react-bootstrap/Container";
import { RolForm } from "./RolForm/RolForm";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Editar Rol</h1>
      <RolForm />
    </Container>
  );
}
