import { Select } from "@/components/Select/Select";

const ESTADO_OPTIONS = [
  { value: "", label: "Todos los Estados" },
  { value: "Activo", label: "Activo" },
  { value: "Inactivo", label: "Inactivo" },
];

export function IGU_2_SELECT_1() {
  return <Select options={ESTADO_OPTIONS} value="" id="igu-2-select-1" />;
}
