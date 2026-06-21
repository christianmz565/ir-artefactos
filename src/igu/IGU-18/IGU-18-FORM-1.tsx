import Card from "react-bootstrap/Card";

export function IGU_18_FORM_1() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Datos de la Notificación</Card.Title>
        <dl className="row mb-0">
          <dt className="col-sm-3">ID</dt>
          <dd className="col-sm-9">1</dd>

          <dt className="col-sm-3">Fecha y Hora</dt>
          <dd className="col-sm-9">2026-06-15 08:00:00</dd>

          <dt className="col-sm-3">Apoderado destino</dt>
          <dd className="col-sm-9">Pedro Pérez (Apoderado de Juan Pérez)</dd>

          <dt className="col-sm-3">Plataforma</dt>
          <dd className="col-sm-9">WhatsApp</dd>

          <dt className="col-sm-3">Estado</dt>
          <dd className="col-sm-9">
            <span className="badge bg-success">Sent</span>
          </dd>

          <dt className="col-sm-3">Mensaje</dt>
          <dd className="col-sm-9">
            Se informa que su hijo(a) registró tardanza el día de hoy.
          </dd>
        </dl>
      </Card.Body>
    </Card>
  );
}
