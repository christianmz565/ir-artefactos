import Container from "react-bootstrap/Container";
import { MOCK_AUXILIARES } from "@/mocks/auxiliars";
import { InactivationConfirm } from "./InactivationConfirm/InactivationConfirm";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Inactivar Auxiliar</h1>
      <InactivationConfirm auxiliar={MOCK_AUXILIARES[0]} />
    </Container>
  );
}
