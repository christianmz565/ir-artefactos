import { Select } from "@/components/Select/Select";

const ESTADO_OPTIONS = [
  { value: "", label: "Todas" },
  { value: "Active", label: "Activa" },
  { value: "Inactive", label: "Inactiva" },
];

export function IGU_40_SELECT_1() {
  return <Select options={ESTADO_OPTIONS} value="" id="igu-40-select-1" />;
}
