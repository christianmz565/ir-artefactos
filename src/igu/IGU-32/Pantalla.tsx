import Container from "react-bootstrap/Container";
import { IGU_32_TAB_4 } from "./IGU-32-TAB-4";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Consultar Apoderados</h1>
      <IGU_32_TAB_4 />
    </Container>
  );
}
