import { Select } from "@/components/Select/Select";

const TIPO_OPTIONS = [
  { value: "", label: "Todos" },
  { value: "E", label: "Entrada" },
  { value: "S", label: "Salida" },
];

interface TipoFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function TipoFilter({ value, onChange }: TipoFilterProps) {
  return (
    <Select
      label="Tipo"
      options={TIPO_OPTIONS}
      value={value}
      onChange={onChange}
      id="filter-tipo"
    />
  );
}
