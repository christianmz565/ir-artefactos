import Container from "react-bootstrap/Container";
import { IGU_12_MDL_1 } from "./IGU-12-MDL-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Inactivar Profesor</h1>
      <div style={{ maxWidth: "600px" }}>
        <IGU_12_MDL_1 />
      </div>
    </Container>
  );
}
