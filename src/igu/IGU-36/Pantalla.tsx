import Container from "react-bootstrap/Container";
import { IGU_36_NAVBAR_1 } from "./IGU-36-NAVBAR-1";
import { IGU_36_TAB_4 } from "./IGU-36-TAB-4";

export function Pantalla() {
  return (
    <Container className="py-4">
      <IGU_36_NAVBAR_1 />
      <IGU_36_TAB_4 />
    </Container>
  );
}
