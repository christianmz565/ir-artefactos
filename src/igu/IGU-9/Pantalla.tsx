import Container from "react-bootstrap/Container";
import { MOCK_REPORTES } from "@/mocks/reportes";
import { ReporteTable } from "./ReporteTable/ReporteTable";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Reportes Generados</h1>
      <ReporteTable
        reportes={MOCK_REPORTES}
        onVerDetalle={(id) => alert(`Ver detalle de reporte ${id}`)}
        onDescargar={(url) => alert(`Iniciando descarga: ${url}`)}
        onEliminar={(id) => alert(`Eliminar reporte ${id}`)}
      />
    </Container>
  );
}
