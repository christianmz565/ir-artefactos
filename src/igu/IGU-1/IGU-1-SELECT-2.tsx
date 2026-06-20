import { Select } from "@/components/Select/Select";
import { MOCK_MODULO_OPTIONS } from "@/mocks/auxiliars";

export function IGU_1_SELECT_2() {
  return (
    <Select
      label="Módulo institucional"
      options={[
        { value: "", label: "Seleccione un módulo" },
        ...MOCK_MODULO_OPTIONS,
      ]}
      value=""
      id="igu-1-select-2"
    />
  );
}
