import { Select } from "@/components/Select/Select";
import { MOCK_SECCION_OPTIONS } from "@/mocks/asistencias";

interface SeccionFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function SeccionFilter({ value, onChange }: SeccionFilterProps) {
  return (
    <Select
      label="Sección"
      options={MOCK_SECCION_OPTIONS}
      value={value}
      onChange={onChange}
      id="filter-seccion"
    />
  );
}
