import Container from "react-bootstrap/Container";
import { IGU_7_NAVBAR_1 } from "./IGU-7-NAVBAR-1";
import { IGU_7_TAB_4 } from "./IGU-7-TAB-4";

export function Pantalla() {
  return (
    <Container className="py-4">
      <IGU_7_NAVBAR_1 />
      <IGU_7_TAB_4 />
    </Container>
  );
}
