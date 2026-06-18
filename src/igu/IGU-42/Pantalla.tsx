import Container from "react-bootstrap/Container";
import { MOCK_PLATAFORMAS } from "@/mocks/plataformas";
import { InactivationConfirm } from "./InactivationConfirm/InactivationConfirm";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Inactivar Plataforma</h1>
      <InactivationConfirm plataforma={MOCK_PLATAFORMAS[0]} />
    </Container>
  );
}
