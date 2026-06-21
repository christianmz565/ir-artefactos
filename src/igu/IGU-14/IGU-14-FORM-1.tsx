import Card from "react-bootstrap/Card";

export function IGU_14_FORM_1() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Información del Estudiante</Card.Title>
        <dl className="row mb-0">
          <dt className="col-sm-4">ID</dt>
          <dd className="col-sm-8">1</dd>

          <dt className="col-sm-4">Nombre</dt>
          <dd className="col-sm-8">Alice Johnson</dd>

          <dt className="col-sm-4">Correo electrónico</dt>
          <dd className="col-sm-8">alice@example.com</dd>

          <dt className="col-sm-4">Curso</dt>
          <dd className="col-sm-8">CS</dd>

          <dt className="col-sm-4">Estado</dt>
          <dd className="col-sm-8">
            <span className="badge bg-success">Activo</span>
          </dd>
        </dl>
      </Card.Body>
    </Card>
  );
}
