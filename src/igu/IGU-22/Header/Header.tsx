import { AddAsistenciaButton } from "./AddAsistenciaButton";
import { SearchEstudiante } from "./SearchEstudiante";

export function Header() {
  return (
    <div className="d-flex justify-content-between mb-4 flex-wrap gap-3 align-items-center">
      <h1 className="mb-0">Consulta de Asistencias</h1>
      <div className="d-flex gap-3 align-items-center">
        <SearchEstudiante value="" onChange={() => {}} />
        <AddAsistenciaButton />
      </div>
    </div>
  );
}
