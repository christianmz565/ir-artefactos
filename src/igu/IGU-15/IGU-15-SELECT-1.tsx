import { Select } from "@/components/Select/Select";

const ESTADO_OPTIONS = [
  { value: "", label: "Todos los Estados" },
  { value: "Active", label: "Activo" },
  { value: "Inactive", label: "Inactivo" },
];

export function IGU_15_SELECT_1() {
  return <Select options={ESTADO_OPTIONS} value="" id="igu-15-select-1" />;
}
