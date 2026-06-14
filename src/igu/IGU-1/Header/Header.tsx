import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { Select } from "@/components/Select/Select";
import { MOCK_COURSE_OPTIONS } from "@/mocks/students";

export function Header() {
  return (
    <div className="d-flex justify-content-between mb-4 flex-wrap gap-3 align-items-center">
      <h1 className="mb-0">Gestión de Estudiantes</h1>
      <div className="d-flex gap-3 align-items-center">
        <Input
          placeholder="Buscar por nombre..."
          value=""
          onChange={() => {}}
          id="search-students"
        />
        <Select
          options={MOCK_COURSE_OPTIONS}
          value=""
          onChange={() => {}}
          id="filter-course"
        />
        <Button>+ Agregar Estudiante</Button>
      </div>
    </div>
  );
}
