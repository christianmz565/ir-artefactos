import Card from "react-bootstrap/Card";
import { IGU_13_BTN_1 } from "./IGU-13-BTN-1";
import { IGU_13_BTN_2 } from "./IGU-13-BTN-2";

export function IGU_13_MDL_1() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Inactivar Estudiante</Card.Title>
        <p className="mb-3">
          ¿Está seguro que desea inactivar al estudiante{" "}
          <strong>Alice Johnson</strong> del curso <strong>CS</strong>?
        </p>
        <p className="text-muted">
          El registro pasará al estado <strong>Inactivo</strong> y sus registros
          de asistencia previos se conservarán.
        </p>
        <div className="d-flex mt-3 gap-2">
          <IGU_13_BTN_1 />
          <IGU_13_BTN_2 />
        </div>
      </Card.Body>
    </Card>
  );
}
