import { Select } from "@/components/Select/Select";

const ESTADO_OPTIONS = [
  { value: "", label: "Todos" },
  { value: "Present", label: "Presente" },
  { value: "Late", label: "Tardanza" },
  { value: "Absent", label: "Falta" },
];

export function IGU_22_SELECT_4() {
  return (
    <Select
      label="Estado"
      options={ESTADO_OPTIONS}
      value=""
      id="igu-22-select-4"
    />
  );
}
