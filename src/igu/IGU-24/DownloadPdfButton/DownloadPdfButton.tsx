import { Button } from "@/components/Button/Button";
import { MOCK_REPORTES } from "@/mocks/reportes";

export function DownloadPdfButton() {
  const reporte = MOCK_REPORTES[0];

  return (
    <Button
      variant="primary"
      id="btn-descargar-reporte"
      onClick={() => window.open(reporte.urlDescarga, "_blank")}
    >
      Descargar {reporte.formato}
    </Button>
  );
}
