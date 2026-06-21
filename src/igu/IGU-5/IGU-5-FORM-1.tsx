import Card from "react-bootstrap/Card";
import type { Auxiliar } from "@/types/auxiliar";

export function IGU_5_FORM_1({ auxiliar }: { auxiliar: Auxiliar }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Información del Auxiliar</Card.Title>
        <dl className="row mb-0">
          <dt className="col-sm-4">ID</dt>
          <dd className="col-sm-8">{auxiliar.id}</dd>

          <dt className="col-sm-4">Nombres</dt>
          <dd className="col-sm-8">{auxiliar.firstName}</dd>

          <dt className="col-sm-4">Apellidos</dt>
          <dd className="col-sm-8">{auxiliar.lastName}</dd>

          <dt className="col-sm-4">Tipo de Documento</dt>
          <dd className="col-sm-8">{auxiliar.documentType}</dd>

          <dt className="col-sm-4">Número de Documento</dt>
          <dd className="col-sm-8">{auxiliar.documentNumber}</dd>

          <dt className="col-sm-4">Correo electrónico</dt>
          <dd className="col-sm-8">{auxiliar.email}</dd>

          <dt className="col-sm-4">Teléfono</dt>
          <dd className="col-sm-8">{auxiliar.phone}</dd>

          <dt className="col-sm-4">Estado</dt>
          <dd className="col-sm-8">{auxiliar.status}</dd>

          <dt className="col-sm-4">Módulos asociados</dt>
          <dd className="col-sm-8">
            {auxiliar.modules.length === 0 ? (
              <span className="text-muted">Sin módulos asignados</span>
            ) : (
              <ul className="mb-0">
                {auxiliar.modules.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            )}
          </dd>
        </dl>
      </Card.Body>
    </Card>
  );
}
