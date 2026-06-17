import Card from "react-bootstrap/Card";
import { Button } from "@/components/Button/Button";
import type { Apoderado } from "@/types/apoderado";

interface Props {
  apoderado: Apoderado;
  onConfirm: (id: number) => void;
  onCancel: () => void;
}

export function InactivationConfirm({ apoderado, onConfirm, onCancel }: Props) {
  const isActivo = apoderado.estado === "Activo";
  const actionText = isActivo ? "inactivar" : "eliminar";

  return (
    <Card className="border-danger">
      <Card.Body>
        <Card.Title className="text-danger">
          Confirmar {isActivo ? "Inactivación" : "Eliminación"}
        </Card.Title>
        <Card.Text>
          ¿Está seguro que desea {actionText} al apoderado{" "}
          <strong>
            {apoderado.nombres} {apoderado.apellidos}
          </strong>
          ?
        </Card.Text>
        <div className="d-flex gap-2 mt-4">
          <Button variant="danger" onClick={() => onConfirm(apoderado.id)}>
            Sí, {actionText}
          </Button>
          <Button variant="secondary" onClick={onCancel}>
            Cancelar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
