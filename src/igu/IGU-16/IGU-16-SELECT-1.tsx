import { Select } from "@/components/Select/Select";

const TIPO_OPTIONS = [
  { value: "Entry", label: "Entrada" },
  { value: "Exit", label: "Salida" },
];

export function IGU_16_SELECT_1() {
  return (
    <Select
      label="Tipo"
      options={TIPO_OPTIONS}
      value="Entry"
      id="igu-16-select-1"
    />
  );
}
