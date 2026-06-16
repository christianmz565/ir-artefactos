import Container from "react-bootstrap/Container";
import { Header } from "./Header/Header";
import { StudentTable } from "./StudentTable/StudentTable";

export function Pantalla() {
  return (
    <Container className="py-4">
      <Header />
      <StudentTable />
    </Container>
  );
}
