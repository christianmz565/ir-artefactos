import Card from "react-bootstrap/Card";
import { Button } from "@/components/Button/Button";
import { MOCK_ASISTENCIAS } from "@/mocks/asistencias";

interface EliminarAsistenciaCardProps {
  asistenciaId?: number;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export function DeleteConfirm({
  asistenciaId = 1,
  onConfirm,
  onCancel,
}: EliminarAsistenciaCardProps) {
  const asistencia =
    MOCK_ASISTENCIAS.find((a) => a.id === asistenciaId) || MOCK_ASISTENCIAS[0];

  return (
    <Card>
      <Card.Body>
        <Card.Title>Eliminar Asistencia</Card.Title>
        <p className="mb-3">
          ¿Está seguro que desea <strong>eliminar</strong> el registro de
          asistencia del estudiante{" "}
          <strong>{asistencia.estudianteNombre}</strong> del día{" "}
          <strong>{asistencia.fecha}</strong>?
        </p>
        <p className="text-muted">
          Esta acción eliminará permanentemente el registro de{" "}
          {asistencia.tipo === "Entrada" ? "entrada" : "salida"} del estudiante.
        </p>
        <div className="d-flex mt-3 gap-2">
          <Button variant="danger" onClick={onConfirm} id="confirm-delete">
            Confirmar eliminación
          </Button>
          <Button variant="secondary" onClick={onCancel} id="cancel-delete">
            Cancelar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
