import Container from "react-bootstrap/Container";
import { MOCK_GUARDIANS } from "@/mocks/apoderados";
import { IGU_34_MDL_1 } from "./IGU-34-MDL-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Gestionar Apoderado</h1>
      <div style={{ maxWidth: "600px" }}>
        <IGU_34_MDL_1 guardian={MOCK_GUARDIANS[0]} />
      </div>
    </Container>
  );
}
