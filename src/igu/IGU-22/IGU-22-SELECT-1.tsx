import { Select } from "@/components/Select/Select";
import { MOCK_GRADO_OPTIONS } from "@/mocks/asistencias";

export function IGU_22_SELECT_1() {
  return (
    <Select
      label="Grado"
      options={MOCK_GRADO_OPTIONS}
      value=""
      id="igu-22-select-1"
    />
  );
}
