import { Select } from "@/components/Select/Select";
import { MOCK_GRADO_OPTIONS } from "@/mocks/asistencias";

export function IGU_21_SELECT_1() {
  return (
    <Select
      label="Grado"
      options={MOCK_GRADO_OPTIONS}
      value="5to Primaria"
      id="igu-21-select-1"
    />
  );
}
