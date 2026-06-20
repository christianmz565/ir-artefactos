import { Select } from "@/components/Select/Select";
import { MOCK_SECCION_OPTIONS } from "@/mocks/asistencias";

export function IGU_21_SELECT_2() {
  return (
    <Select
      label="Sección"
      options={MOCK_SECCION_OPTIONS}
      value="A"
      id="igu-21-select-2"
    />
  );
}
