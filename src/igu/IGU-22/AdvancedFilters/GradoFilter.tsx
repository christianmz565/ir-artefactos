import { Select } from "@/components/Select/Select";
import { MOCK_GRADO_OPTIONS } from "@/mocks/asistencias";

interface GradoFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function GradoFilter({ value, onChange }: GradoFilterProps) {
  return (
    <Select
      label="Grado"
      options={MOCK_GRADO_OPTIONS}
      value={value}
      onChange={onChange}
      id="filter-grado"
    />
  );
}
