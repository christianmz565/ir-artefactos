import { Select } from "@/components/Select/Select";
import { MOCK_MODULO_OPTIONS } from "@/mocks/auxiliars";

export function IGU_3_SELECT_2() {
  return (
    <Select
      label="Módulo institucional"
      options={[
        { value: "", label: "Seleccione un módulo" },
        ...MOCK_MODULO_OPTIONS,
      ]}
      value="Primaria - 3A"
      id="igu-3-select-2"
    />
  );
}
