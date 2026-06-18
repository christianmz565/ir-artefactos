import { Select } from "@/components/Select/Select";

const ESTADO_OPTIONS = [
  { value: "", label: "Todos los Estados" },
  { value: "Activo", label: "Activo" },
  { value: "Inactivo", label: "Inactivo" },
];

interface EstadoFilterSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function EstadoFilterSelect({
  value,
  onChange,
}: EstadoFilterSelectProps) {
  return (
    <Select
      options={ESTADO_OPTIONS}
      value={value}
      onChange={onChange}
      id="filter-estado"
    />
  );
}
