import Container from "react-bootstrap/Container";
import { MOCK_AUXILIARES } from "@/mocks/auxiliars";
import { IGU_4_MDL_1 } from "./IGU-4-MDL-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Inactivar Auxiliar</h1>
      <div style={{ maxWidth: "600px" }}>
        <IGU_4_MDL_1 auxiliar={MOCK_AUXILIARES[0]} />
      </div>
    </Container>
  );
}
