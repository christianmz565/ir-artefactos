import Card from "react-bootstrap/Card";
import type { Auxiliar } from "@/types/auxiliar";

interface AuxiliarDetailProps {
  auxiliar: Auxiliar;
}

export function AuxiliarDetail({ auxiliar }: AuxiliarDetailProps) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Información del Auxiliar</Card.Title>
        <dl className="row mb-0">
          <dt className="col-sm-4">ID</dt>
          <dd className="col-sm-8">{auxiliar.id}</dd>

          <dt className="col-sm-4">Nombres</dt>
          <dd className="col-sm-8">{auxiliar.nombres}</dd>

          <dt className="col-sm-4">Apellidos</dt>
          <dd className="col-sm-8">{auxiliar.apellidos}</dd>

          <dt className="col-sm-4">Tipo de Documento</dt>
          <dd className="col-sm-8">{auxiliar.tipoDocumento}</dd>

          <dt className="col-sm-4">Número de Documento</dt>
          <dd className="col-sm-8">{auxiliar.numeroDocumento}</dd>

          <dt className="col-sm-4">Correo electrónico</dt>
          <dd className="col-sm-8">{auxiliar.correo}</dd>

          <dt className="col-sm-4">Teléfono</dt>
          <dd className="col-sm-8">{auxiliar.telefono}</dd>

          <dt className="col-sm-4">Estado</dt>
          <dd className="col-sm-8">{auxiliar.estado}</dd>

          <dt className="col-sm-4">Módulos asociados</dt>
          <dd className="col-sm-8">
            {auxiliar.modulos.length === 0 ? (
              <span className="text-muted">Sin módulos asignados</span>
            ) : (
              <ul className="mb-0">
                {auxiliar.modulos.map((m) => (
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
