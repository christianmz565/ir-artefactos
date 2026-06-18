import Container from "react-bootstrap/Container";
import { AuxiliarTable } from "./AuxiliarTable/AuxiliarTable";
import { Header } from "./Header/Header";

export function Pantalla() {
  return (
    <Container className="py-4">
      <Header />
      <AuxiliarTable />
    </Container>
  );
}
