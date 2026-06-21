import { Select } from "@/components/Select/Select";

const TIPO_OPTIONS = [
  { value: "", label: "Todos" },
  { value: "E", label: "Entry" },
  { value: "S", label: "Exit" },
];

export function IGU_22_SELECT_3() {
  return (
    <Select label="Tipo" options={TIPO_OPTIONS} value="" id="igu-22-select-3" />
  );
}
