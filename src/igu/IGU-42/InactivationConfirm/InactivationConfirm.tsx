import Card from "react-bootstrap/Card";
import { Button } from "@/components/Button/Button";
import type { Plataforma } from "@/types/plataforma";

interface InactivationConfirmProps {
  plataforma: Plataforma;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export function InactivationConfirm({
  plataforma,
  onConfirm,
  onCancel,
}: InactivationConfirmProps) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Inactivar Plataforma</Card.Title>
        <p className="mb-3">
          ¿Está seguro que desea inactivar la plataforma{" "}
          <strong>{plataforma.nombre}</strong> con URL{" "}
          <strong>{plataforma.url}</strong>?
        </p>
        <p className="text-muted">
          El registro pasará al estado <strong>Inactiva</strong> y las
          notificaciones enviadas a través de esta plataforma dejarán de
          funcionar.
        </p>
        <div className="d-flex mt-3 gap-2">
          <Button
            variant="danger"
            onClick={onConfirm}
            id="confirm-inactivate-plataforma"
          >
            Confirmar inactivación
          </Button>
          <Button
            variant="secondary"
            onClick={onCancel}
            id="cancel-inactivate-plataforma"
          >
            Cancelar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
