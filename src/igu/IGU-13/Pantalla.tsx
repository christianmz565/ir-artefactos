import Container from "react-bootstrap/Container";
import { IGU_13_MDL_1 } from "./IGU-13-MDL-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Inactivar Estudiante</h1>
      <div style={{ maxWidth: "600px" }}>
        <IGU_13_MDL_1 />
      </div>
    </Container>
  );
}
