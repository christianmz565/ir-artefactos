import Container from "react-bootstrap/Container";
import { IGU_22_FORM_1 } from "./IGU-22-FORM-1";
import { IGU_22_NAVBAR_1 } from "./IGU-22-NAVBAR-1";
import { IGU_22_TAB_4 } from "./IGU-22-TAB-4";

export function Pantalla() {
  return (
    <Container className="py-4">
      <IGU_22_NAVBAR_1 />
      <IGU_22_FORM_1 />
      <IGU_22_TAB_4 />
    </Container>
  );
}
