import Card from "react-bootstrap/Card";
import { Button } from "@/components/Button/Button";
import type { Auxiliar } from "@/types/auxiliar";

interface InactivationConfirmProps {
  auxiliar: Auxiliar;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export function InactivationConfirm({
  auxiliar,
  onConfirm,
  onCancel,
}: InactivationConfirmProps) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Inactivar Auxiliar</Card.Title>
        <p className="mb-3">
          ¿Está seguro que desea inactivar al auxiliar{" "}
          <strong>{`${auxiliar.nombres} ${auxiliar.apellidos}`}</strong> con
          documento{" "}
          <strong>{`${auxiliar.tipoDocumento} - ${auxiliar.numeroDocumento}`}</strong>
          ?
        </p>
        <p className="text-muted">
          El registro pasará al estado <strong>Inactivo</strong> y sus
          credenciales serán deshabilitadas. El historial de asistencia generado
          previamente se conservará.
        </p>
        <div className="d-flex mt-3 gap-2">
          <Button variant="danger" onClick={onConfirm} id="confirm-inactivate">
            Confirmar inactivación
          </Button>
          <Button variant="secondary" onClick={onCancel} id="cancel-inactivate">
            Cancelar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
