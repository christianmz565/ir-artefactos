import Card from "react-bootstrap/Card";

export function IGU_28_FORM_1() {
  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>Datos del Estudiante</Card.Title>
        <div className="row">
          <div className="col-md-4">
            <p className="mb-1">
              <strong>Nombre:</strong> Juan Pérez García
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
  );
}
