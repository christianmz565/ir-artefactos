import { Select } from "@/components/Select/Select";

const PERMISSION_OPTIONS = [
  { value: "read", label: "Leer" },
  { value: "write", label: "Escribir" },
  { value: "delete", label: "Eliminar" },
];

export function IGU_37_SELECT_1() {
  return (
    <Select
      label="Permisos"
      options={PERMISSION_OPTIONS}
      value="read"
      id="igu-37-select-1"
    />
  );
}
