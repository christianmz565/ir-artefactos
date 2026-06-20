import { Select } from "@/components/Select/Select";
import { MOCK_DOCUMENT_TYPE_OPTIONS } from "@/mocks/auxiliars";

export function IGU_3_SELECT_1() {
  return (
    <Select
      label="Tipo de Documento"
      options={MOCK_DOCUMENT_TYPE_OPTIONS}
      value="DNI"
      id="igu-3-select-1"
    />
  );
}
