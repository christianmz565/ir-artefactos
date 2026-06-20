import { Select } from "@/components/Select/Select";

const TIPO_OPTIONS = [
  { value: "Entry", label: "Entrada" },
  { value: "Exit", label: "Salida" },
];

export function IGU_19_SELECT_1() {
  return (
    <Select
      label="Tipo"
      options={TIPO_OPTIONS}
      value="Entry"
      id="igu-19-select-1"
    />
  );
}
