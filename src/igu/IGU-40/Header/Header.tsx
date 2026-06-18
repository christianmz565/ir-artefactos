import { AddPlataformaButton } from "./AddPlataformaButton";
import { EstadoFilterSelect } from "./EstadoFilterSelect";
import { SearchInput } from "./SearchInput";

export function Header() {
  return (
    <div className="d-flex justify-content-between mb-4 flex-wrap gap-3 align-items-center">
      <h1 className="mb-0">Gestión de Plataformas</h1>
      <div className="d-flex gap-3 align-items-center">
        <SearchInput value="" onChange={() => {}} />
        <EstadoFilterSelect value="" onChange={() => {}} />
        <AddPlataformaButton />
      </div>
    </div>
  );
}
