import { Select } from "@/components/Select/Select";

export function IGU_33_SELECT_1() {
  return (
    <Select
      label="Tipo de Documento"
      value="DNI"
      id="igu-33-select-1"
      options={[
        { label: "DNI", value: "DNI" },
        { label: "Carnet de Extranjería", value: "CE" },
        { label: "Pasaporte", value: "PAS" },
      ]}
    />
  );
}
