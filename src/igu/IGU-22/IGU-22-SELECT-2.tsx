import { Select } from "@/components/Select/Select";
import { MOCK_SECCION_OPTIONS } from "@/mocks/asistencias";

export function IGU_22_SELECT_2() {
  return (
    <Select
      label="Sección"
      options={MOCK_SECCION_OPTIONS}
      value=""
      id="igu-22-select-2"
    />
  );
}
