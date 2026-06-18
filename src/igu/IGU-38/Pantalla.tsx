import Container from "react-bootstrap/Container";
import { MOCK_ROLES } from "@/mocks/roles";
import { InactivationConfirm } from "./InactivationConfirm/InactivationConfirm";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Inactivar Rol</h1>
      <InactivationConfirm rol={MOCK_ROLES[0]} />
    </Container>
  );
}
