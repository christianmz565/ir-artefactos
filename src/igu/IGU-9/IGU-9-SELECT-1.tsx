import { Select } from "@/components/Select/Select";
import { MOCK_DOCUMENT_TYPE_OPTIONS } from "@/mocks/profesores";

export function IGU_9_SELECT_1() {
  return (
    <Select
      label="Tipo de Documento"
      options={MOCK_DOCUMENT_TYPE_OPTIONS}
      value="DNI"
      id="igu-9-select-1"
    />
  );
}
