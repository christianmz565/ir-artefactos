import Container from "react-bootstrap/Container";
import { ReportForm } from "./ReportForm/ReportForm";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Generador de Reportes</h1>
      <ReportForm />
    </Container>
  );
}
