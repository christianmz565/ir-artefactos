import { Select } from "@/components/Select/Select";

const ESTADO_OPTIONS = [
  { value: "", label: "Todas" },
  { value: "Activa", label: "Activa" },
  { value: "Inactiva", label: "Inactiva" },
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
      id="filter-estado-plataforma"
    />
  );
}
