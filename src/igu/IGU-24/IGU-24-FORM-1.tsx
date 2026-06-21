import Card from "react-bootstrap/Card";

export function IGU_24_FORM_1() {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Datos del PDF</Card.Title>
        <div className="col">
          <div className="col-md-4">
            <p className="mb-1">
              <strong>ID:</strong> 1
            </p>
          </div>
          <div className="col-md-4">
            <p className="mb-1">
              <strong>Fecha de generación:</strong> 2026-06-15 14:30:00
            </p>
          </div>
          <div className="col-md-4">
            <p className="mb-1">
              <strong>Formato:</strong> PDF
            </p>
          </div>
        </div>
      </Card.Body>
      <Card.Body>
        <Card.Title>Datos del Estudiante</Card.Title>
        <div className="col">
          <div className="col-md-3">
            <p className="mb-1">
              <strong>Nombre:</strong> Juan Pérez García
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
