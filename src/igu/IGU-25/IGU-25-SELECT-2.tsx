import { Select } from "@/components/Select/Select";
import { MOCK_SECCION_OPTIONS } from "@/mocks/asistencias";

export function IGU_25_SELECT_2() {
  return (
    <Select
      label="Sección"
      options={MOCK_SECCION_OPTIONS}
      value=""
      id="igu-25-select-2"
    />
  );
}
