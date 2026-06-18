import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import { Button } from "@/components/Button/Button";
import { MOCK_ASISTENCIAS } from "@/mocks/asistencias";

function getEstadoVariant(estado: string): string {
  switch (estado) {
    case "Presente":
      return "success";
    case "Tardanza":
      return "warning";
    case "Falta":
      return "danger";
    default:
      return "secondary";
  }
}

export function DetalleAsistencia() {
  const asistencia = MOCK_ASISTENCIAS[0];

  return (
    <>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Datos del Estudiante</Card.Title>
          <div className="row">
            <div className="col-md-4">
              <p className="mb-1">
                <strong>Nombre:</strong> {asistencia.estudianteNombre}
              </p>
              <p className="mb-1">
                <strong>DNI:</strong> 12345678
              </p>
            </div>
            <div className="col-md-4">
              <p className="mb-1">
                <strong>Grado:</strong> 5to Primaria
              </p>
              <p className="mb-1">
                <strong>Sección:</strong> A
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Registro de Marcaje</Card.Title>
          <div className="row">
            <div className="col-md-4">
              <p className="mb-1">
                <strong>Fecha y Hora:</strong> {asistencia.fecha}{" "}
                {asistencia.hora}
              </p>
              <p className="mb-1">
                <strong>Dispositivo/Lector:</strong> {asistencia.dispositivo}
              </p>
            </div>
            <div className="col-md-4">
              <p className="mb-1">
                <strong>Tipo:</strong> {asistencia.tipo}
              </p>
              <p className="mb-1">
                <strong>Estado:</strong>{" "}
                <Badge bg={getEstadoVariant(asistencia.estado)}>
                  {asistencia.estado}
                </Badge>
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Auditoría</Card.Title>
          <div className="row">
            <div className="col-md-4">
              <p className="mb-1">
                <strong>Responsable:</strong> {asistencia.responsableNombre}
              </p>
            </div>
            <div className="col-md-8">
              <p className="mb-1">
                <strong>Justificación:</strong>{" "}
                {asistencia.justificacion || "—"}
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>

      <Button variant="secondary" id="BTN-VOLVER">
        Volver al listado
      </Button>
    </>
  );
}
