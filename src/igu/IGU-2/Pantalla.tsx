import Container from "react-bootstrap/Container";
import { IGU_2_NAVBAR_1 } from "./IGU-2-NAVBAR-1";
import { IGU_2_TAB_1 } from "./IGU-2-TAB-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <IGU_2_NAVBAR_1 />
      <IGU_2_TAB_1 />
    </Container>
  );
}
