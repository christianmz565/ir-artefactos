import Container from "react-bootstrap/Container";
import { ReportForm } from "./ReportForm/ReportForm";

export function Pantalla() {
  return (
    <Container className="py-4">
      <div className="d-flex align-items-center gap-3 mb-4">
        <h1 className="mb-0">Generador de Reportes</h1>
      </div>
      <ReportForm />
    </Container>
  );
}
