import Card from "react-bootstrap/Card";
import { IGU_24_BTN_2 } from "./IGU-24-BTN-2";

export function IGU_24_MDL_1() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Documento</Card.Title>
        <div className="text-center py-5 border">
          <p className="text-muted mb-0">
            Vista previa no disponible para este tipo de archivo. Utilice el
            botón de descarga para visualizar el documento.
          </p>
        </div>
        <div className="mt-3 text-end">
          <IGU_24_BTN_2 />
        </div>
      </Card.Body>
    </Card>
  );
}
