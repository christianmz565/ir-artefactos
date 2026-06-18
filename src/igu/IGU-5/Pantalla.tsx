import Container from "react-bootstrap/Container";
import { MOCK_AUXILIARES } from "@/mocks/auxiliars";
import { BackPageButton } from "../IGU-28/BackPage/BackPageButton";
import { AuxiliarDetail } from "./AuxiliarDetail/AuxiliarDetail";

export function Pantalla() {
  return (
    <Container className="py-4">
      <BackPageButton />
      <h1 className="mb-4">Detalle del Auxiliar</h1>
      <AuxiliarDetail auxiliar={MOCK_AUXILIARES[0]} />
    </Container>
  );
}
