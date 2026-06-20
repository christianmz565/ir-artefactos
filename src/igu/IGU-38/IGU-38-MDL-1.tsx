import Card from "react-bootstrap/Card";
import { IGU_38_BTN_1 } from "./IGU-38-BTN-1";
import { IGU_38_BTN_2 } from "./IGU-38-BTN-2";

export function IGU_38_MDL_1() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Inactivar Rol</Card.Title>
        <p className="mb-3">
          ¿Está seguro que desea inactivar el rol <strong>Administrador</strong>{" "}
          con permisos{" "}
          <strong>Gestión de Auxiliares, Gestión de Estudiantes</strong>?
        </p>
        <p className="text-muted">
          El registro pasará al estado <strong>Inactivo</strong> y los usuarios
          con este rol perderán sus permisos asociados.
        </p>
        <div className="d-flex mt-3 gap-2">
          <IGU_38_BTN_1 />
          <IGU_38_BTN_2 />
        </div>
      </Card.Body>
    </Card>
  );
}
