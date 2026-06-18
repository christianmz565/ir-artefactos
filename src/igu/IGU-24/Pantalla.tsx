import Container from "react-bootstrap/Container";
import { PdfViewer } from "./PdfViewer/PdfViewer";
import { ReportData } from "./ReportData/ReportData";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Detalle de Reporte Generado</h1>
      <ReportData />
      <PdfViewer />
    </Container>
  );
}
