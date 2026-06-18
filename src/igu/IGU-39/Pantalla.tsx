import Container from "react-bootstrap/Container";
import { PlataformaForm } from "./PlataformaForm/PlataformaForm";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Registrar Plataforma</h1>
      <PlataformaForm />
    </Container>
  );
}
