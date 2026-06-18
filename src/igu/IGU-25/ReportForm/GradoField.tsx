import { Select } from "@/components/Select/Select";
import { MOCK_GRADO_OPTIONS } from "@/mocks/asistencias";

interface GradoFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function GradoField({ value, onChange }: GradoFieldProps) {
  return (
    <Select
      label="Grado"
      options={MOCK_GRADO_OPTIONS}
      value={value}
      onChange={onChange}
      id="report-grado"
    />
  );
}
