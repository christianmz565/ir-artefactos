import { Select } from "@/components/Select/Select";

export function IGU_30_SELECT_1() {
  return (
    <Select
      label="Plataforma de Envío"
      id="igu-30-select-1"
      value="WhatsApp"
      options={[
        { label: "WhatsApp", value: "WhatsApp" },
        { label: "SMS", value: "SMS" },
        { label: "Email", value: "Email" },
      ]}
    />
  );
}
