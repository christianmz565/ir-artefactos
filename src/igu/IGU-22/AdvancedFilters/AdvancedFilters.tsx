import Card from "react-bootstrap/Card";
import { EstadoFilter } from "./EstadoFilter";
import { FechaDesdeFilter } from "./FechaDesdeFilter";
import { FechaHastaFilter } from "./FechaHastaFilter";
import { GradoFilter } from "./GradoFilter";
import { SeccionFilter } from "./SeccionFilter";
import { TipoFilter } from "./TipoFilter";

export function AdvancedFilters() {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Filtros avanzados</Card.Title>
        <div className="d-flex gap-3 align-items-end flex-wrap">
          <FechaDesdeFilter />
          <FechaHastaFilter />
          <GradoFilter value="" onChange={() => {}} />
          <SeccionFilter value="" onChange={() => {}} />
          <TipoFilter value="" onChange={() => {}} />
          <EstadoFilter value="" onChange={() => {}} />
        </div>
      </Card.Body>
    </Card>
  );
}
