import Container from "react-bootstrap/Container";
import { Header } from "./Header/Header";
import { RolTable } from "./RolTable/RolTable";

export function Pantalla() {
  return (
    <Container className="py-4">
      <Header />
      <RolTable />
    </Container>
  );
}
