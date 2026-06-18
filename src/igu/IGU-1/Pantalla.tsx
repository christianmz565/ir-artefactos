import Container from "react-bootstrap/Container";
import { AuxiliarForm } from "./AuxiliarForm/AuxiliarForm";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Crear Auxiliar</h1>
      <AuxiliarForm />
    </Container>
  );
}
