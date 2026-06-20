import { Select } from "@/components/Select/Select";

const EVENTO_OPTIONS = [
  { value: "Falta Injustificada", label: "Falta Injustificada" },
  { value: "Llegada Tarde", label: "Llegada Tarde" },
  { value: "Reunión de Apoderados", label: "Reunión de Apoderados" },
];

export function IGU_17_SELECT_2() {
  return (
    <Select
      label="Tipo de Evento"
      options={EVENTO_OPTIONS}
      value="Falta Injustificada"
      id="igu-17-select-2"
    />
  );
}
