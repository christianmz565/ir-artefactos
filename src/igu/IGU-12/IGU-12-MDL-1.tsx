import Card from "react-bootstrap/Card";
import { IGU_12_BTN_1 } from "./IGU-12-BTN-1";
import { IGU_12_BTN_2 } from "./IGU-12-BTN-2";

export function IGU_12_MDL_1() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Inactivar Profesor</Card.Title>
        <p className="mb-3">
          ¿Está seguro que desea inactivar al profesor{" "}
          <strong>Roberto Mendoza Taco</strong> con documento{" "}
          <strong>DNI - 11223344</strong>?
        </p>
        <p className="text-muted">
          El registro pasará al estado <strong>Inactivo</strong> y sus
          asignaciones a módulos serán liberadas. El historial de calificaciones
          se conservará.
        </p>
        <div className="d-flex mt-3 gap-2">
          <IGU_12_BTN_1 />
          <IGU_12_BTN_2 />
        </div>
      </Card.Body>
    </Card>
  );
}
