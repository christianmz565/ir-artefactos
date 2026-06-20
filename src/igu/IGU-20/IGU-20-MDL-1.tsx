import Card from "react-bootstrap/Card";
import { IGU_20_BTN_1 } from "./IGU-20-BTN-1";
import { IGU_20_BTN_2 } from "./IGU-20-BTN-2";

export function IGU_20_MDL_1() {
  return (
    <Card className="border-danger">
      <Card.Body>
        <Card.Title className="text-danger">Eliminar Reporte</Card.Title>
        <Card.Text>
          ¿Está seguro que desea <strong>eliminar</strong> el reporte{" "}
          <strong>Asistencia Mensual - Mayo</strong> generado el{" "}
          <strong>2026-06-15</strong>?
        </Card.Text>
        <Card.Text>
          Esta acción eliminará permanentemente el archivo del sistema. No podrá
          recuperarse.
        </Card.Text>
        <div className="d-flex gap-2 mt-4">
          <IGU_20_BTN_1 />
          <IGU_20_BTN_2 />
        </div>
      </Card.Body>
    </Card>
  );
}
