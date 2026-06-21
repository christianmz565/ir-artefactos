import Container from "react-bootstrap/Container";
import { IGU_40_NAVBAR_1 } from "./IGU-40-NAVBAR-1";
import { IGU_40_TAB_4 } from "./IGU-40-TAB-4";

export function Pantalla() {
  return (
    <Container className="py-4">
      <IGU_40_NAVBAR_1 />
      <IGU_40_TAB_4 />
    </Container>
  );
}
