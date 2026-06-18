import Card from "react-bootstrap/Card";
import { MOCK_ASISTENCIAS } from "@/mocks/asistencias";
import { MOCK_REPORTES } from "@/mocks/reportes";

export function ReportData() {
  const asistencia = MOCK_ASISTENCIAS[0];
  const reporte = MOCK_REPORTES[0];

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Datos del PDF</Card.Title>
        <div className="col">
          <div className="col-md-4">
            <p className="mb-1">
              <strong>ID:</strong> {reporte.id}
            </p>
          </div>
          <div className="col-md-4">
            <p className="mb-1">
              <strong>Fecha de generación:</strong> {reporte.fechaGeneracion}
            </p>
          </div>
          <div className="col-md-4">
            <p className="mb-1">
              <strong>Formato:</strong> {reporte.formato}
            </p>
          </div>
        </div>
      </Card.Body>
      <Card.Body>
        <Card.Title>Datos del Estudiante</Card.Title>
        <div className="col">
          <div className="col-md-3">
            <p className="mb-1">
              <strong>Nombre:</strong> {asistencia.estudianteNombre}
            </p>
          </div>
          <div className="col-md-3">
            <p className="mb-1">
              <strong>DNI:</strong> 12345678
            </p>
          </div>
          <div className="col-md-3">
            <p className="mb-1">
              <strong>Grado:</strong> 5to Primaria
            </p>
          </div>
          <div className="col-md-3">
            <p className="mb-1">
              <strong>Sección:</strong> A
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
