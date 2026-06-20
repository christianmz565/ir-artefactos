import { Select } from "@/components/Select/Select";

export function IGU_31_SELECT_1() {
  return (
    <Select
      label="Tipo de Documento"
      value="DNI"
      id="igu-31-select-1"
      options={[
        { label: "DNI", value: "DNI" },
        { label: "Carnet de Extranjería", value: "CE" },
        { label: "Pasaporte", value: "PAS" },
      ]}
    />
  );
}
