import Card from "react-bootstrap/Card";
import { IGU_23_BTN_1 } from "./IGU-23-BTN-1";
import { IGU_23_BTN_2 } from "./IGU-23-BTN-2";

export function IGU_23_MDL_1() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Eliminar Asistencia</Card.Title>
        <p className="mb-3">
          ¿Está seguro que desea <strong>eliminar</strong> el registro de
          asistencia del estudiante <strong>Juan Pérez García</strong> del día{" "}
          <strong>2026-06-15</strong>?
        </p>
        <p className="text-muted">
          Esta acción eliminará permanentemente el registro de entrada del
          estudiante.
        </p>
        <div className="d-flex mt-3 gap-2">
          <IGU_23_BTN_1 />
          <IGU_23_BTN_2 />
        </div>
      </Card.Body>
    </Card>
  );
}
