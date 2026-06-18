import Container from "react-bootstrap/Container";
import { Header } from "./Header/Header";
import { PlataformaTable } from "./PlataformaTable/PlataformaTable";

export function Pantalla() {
  return (
    <Container className="py-4">
      <Header />
      <PlataformaTable />
    </Container>
  );
}
