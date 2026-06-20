import { Select } from "@/components/Select/Select";

const ESTADO_OPTIONS = [
  { value: "Present", label: "Presente" },
  { value: "Late", label: "Tardanza" },
  { value: "Absent", label: "Falta" },
];

export function IGU_16_SELECT_2() {
  return (
    <Select
      label="Estado"
      options={ESTADO_OPTIONS}
      value="Present"
      id="igu-16-select-2"
    />
  );
}
