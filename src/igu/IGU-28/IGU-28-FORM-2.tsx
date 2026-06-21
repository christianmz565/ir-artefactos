import Card from "react-bootstrap/Card";

export function IGU_28_FORM_2() {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Registro de Marcaje</Card.Title>
        <div className="row">
          <div className="col-md-4">
            <p className="mb-1">
              <strong>Fecha y Hora:</strong> 2026-06-15 07:45:00
            </p>
            <p className="mb-1">
              <strong>Dispositivo/Lector:</strong> Lector-001
            </p>
          </div>
          <div className="col-md-4">
            <p className="mb-1">
              <strong>Tipo:</strong> Entrada
            </p>
            <p className="mb-1">
              <strong>Estado:</strong>{" "}
              <span className="badge bg-success">Presente</span>
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
