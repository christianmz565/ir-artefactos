import Container from "react-bootstrap/Container";
import { MOCK_AUXILIARES } from "@/mocks/auxiliars";
import { IGU_5_BTN_1 } from "./IGU-5-BTN-1";
import { IGU_5_FORM_1 } from "./IGU-5-FORM-1";

export function Pantalla() {
  return (
    <Container className="py-4">
      <IGU_5_BTN_1 />
      <h1 className="mb-4">Detalle del Auxiliar</h1>
      <IGU_5_FORM_1 auxiliar={MOCK_AUXILIARES[0]} />
    </Container>
  );
}
