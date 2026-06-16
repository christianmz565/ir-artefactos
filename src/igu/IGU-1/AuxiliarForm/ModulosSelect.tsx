import { Select } from "@/components/Select/Select";
import { MOCK_MODULO_OPTIONS } from "@/mocks/auxiliars";

interface ModulosSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function ModulosSelect({ value, onChange }: ModulosSelectProps) {
  return (
    <Select
      label="Módulo institucional"
      options={[
        { value: "", label: "Seleccione un módulo" },
        ...MOCK_MODULO_OPTIONS,
      ]}
      value={value}
      onChange={onChange}
      id="auxiliar-modulo"
    />
  );
}
