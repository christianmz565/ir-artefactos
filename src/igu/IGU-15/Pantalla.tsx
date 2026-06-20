import Container from "react-bootstrap/Container";
import { IGU_15_NAVBAR_1 } from "./IGU-15-NAVBAR-1";
import { IGU_15_TAB_4 } from "./IGU-15-TAB-4";

export function Pantalla() {
  return (
    <Container className="py-4">
      <IGU_15_NAVBAR_1 />
      <IGU_15_TAB_4 />
    </Container>
  );
}
