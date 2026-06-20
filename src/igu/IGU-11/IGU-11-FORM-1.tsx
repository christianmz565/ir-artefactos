import Card from "react-bootstrap/Card";

export function IGU_11_FORM_1() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Información del Profesor</Card.Title>
        <dl className="row mb-0">
          <dt className="col-sm-4">ID</dt>
          <dd className="col-sm-8">1</dd>

          <dt className="col-sm-4">Nombres</dt>
          <dd className="col-sm-8">Roberto</dd>

          <dt className="col-sm-4">Apellidos</dt>
          <dd className="col-sm-8">Mendoza Taco</dd>

          <dt className="col-sm-4">Tipo de Documento</dt>
          <dd className="col-sm-8">DNI</dd>

          <dt className="col-sm-4">Número de Documento</dt>
          <dd className="col-sm-8">11223344</dd>

          <dt className="col-sm-4">Correo electrónico</dt>
          <dd className="col-sm-8">roberto.mendoza@edu.pe</dd>

          <dt className="col-sm-4">Teléfono</dt>
          <dd className="col-sm-8">987111222</dd>

          <dt className="col-sm-4">Especialidades</dt>
          <dd className="col-sm-8">Matemáticas, Computación</dd>

          <dt className="col-sm-4">Módulos asignados</dt>
          <dd className="col-sm-8">
            {["Secundaria - 4A", "Secundaria - 4B"].length === 0 ? (
              <span className="text-muted">Sin módulos asignados</span>
            ) : (
              <ul className="mb-0">
                {["Secundaria - 4A", "Secundaria - 4B"].map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            )}
          </dd>

          <dt className="col-sm-4">Estado</dt>
          <dd className="col-sm-8">
            <span className="badge bg-success">Active</span>
          </dd>
        </dl>
      </Card.Body>
    </Card>
  );
}
