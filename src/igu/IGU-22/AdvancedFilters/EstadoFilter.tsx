import { Select } from "@/components/Select/Select";

const ESTADO_OPTIONS = [
  { value: "", label: "Todos" },
  { value: "Presente", label: "Presente" },
  { value: "Tardanza", label: "Tardanza" },
  { value: "Falta", label: "Falta" },
];

interface EstadoFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function EstadoFilter({ value, onChange }: EstadoFilterProps) {
  return (
    <Select
      label="Estado"
      options={ESTADO_OPTIONS}
      value={value}
      onChange={onChange}
      id="filter-estado"
    />
  );
}
