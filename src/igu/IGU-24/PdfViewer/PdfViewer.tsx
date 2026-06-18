import Card from "react-bootstrap/Card";
import { Button } from "@/components/Button/Button";
import { MOCK_REPORTES } from "@/mocks/reportes";

export function PdfViewer() {
  const reporte = MOCK_REPORTES[0];

  return (
    <Card>
      <Card.Body>
        <Card.Title>Documento</Card.Title>
        {reporte.formato === "PDF" ? (
          <iframe
            // src={reporte.urlDescarga}
            width="100%"
            height="500px"
            title="Visor de PDF"
            className="border"
          />
        ) : (
          <div className="text-center py-5 border">
            <p className="text-muted mb-0">
              Vista previa no disponible para archivos {reporte.formato}.
              Utilice el botón de descarga para visualizar el documento.
            </p>
          </div>
        )}
        <div className="mt-3 text-end">
          <Button
            variant="primary"
            id="BTN-DESCARGAR-REPORTE"
            onClick={() => window.open(reporte.urlDescarga, "_blank")}
          >
            Descargar {reporte.formato}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
