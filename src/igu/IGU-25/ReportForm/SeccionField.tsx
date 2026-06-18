import { Select } from "@/components/Select/Select";
import { MOCK_SECCION_OPTIONS } from "@/mocks/asistencias";

interface SeccionFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function SeccionField({ value, onChange }: SeccionFieldProps) {
  return (
    <Select
      label="Sección"
      options={MOCK_SECCION_OPTIONS}
      value={value}
      onChange={onChange}
      id="report-seccion"
    />
  );
}
