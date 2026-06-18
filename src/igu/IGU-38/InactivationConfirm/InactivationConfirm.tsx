import Card from "react-bootstrap/Card";
import { Button } from "@/components/Button/Button";
import type { Rol } from "@/types/rol";

interface InactivationConfirmProps {
  rol: Rol;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export function InactivationConfirm({
  rol,
  onConfirm,
  onCancel,
}: InactivationConfirmProps) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Inactivar Rol</Card.Title>
        <p className="mb-3">
          ¿Está seguro que desea inactivar el rol <strong>{rol.nombre}</strong>{" "}
          con permisos <strong>{rol.permisos.join(", ")}</strong>?
        </p>
        <p className="text-muted">
          El registro pasará al estado <strong>Inactivo</strong> y los usuarios
          con este rol perderán sus permisos asociados.
        </p>
        <div className="d-flex mt-3 gap-2">
          <Button
            variant="danger"
            onClick={onConfirm}
            id="confirm-inactivate-rol"
          >
            Confirmar inactivación
          </Button>
          <Button
            variant="secondary"
            onClick={onCancel}
            id="cancel-inactivate-rol"
          >
            Cancelar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
