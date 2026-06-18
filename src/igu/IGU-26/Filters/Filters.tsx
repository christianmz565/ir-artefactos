import { AddNotificacionButton } from "./AddNotificacionButton";
import { FechaDesdeFilter } from "./FechaDesdeFilter";
import { FechaHastaFilter } from "./FechaHastaFilter";
import { SearchNotificacion } from "./SearchNotificacion";
import { SelectEstado } from "./SelectEstado";
import { SelectPlataforma } from "./SelectPlataforma";

export function Filters() {
  return (
    <div className="d-flex justify-content-between mb-4 flex-wrap gap-3 align-items-end">
      <div className="d-flex gap-3 align-items-end flex-wrap">
        <SearchNotificacion />
        <FechaDesdeFilter />
        <FechaHastaFilter />
        <SelectPlataforma />
        <SelectEstado />
      </div>
      <AddNotificacionButton />
    </div>
  );
}
