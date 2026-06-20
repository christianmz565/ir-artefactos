import { Select } from "@/components/Select/Select";

const PLATAFORMA_OPTIONS = [
  { value: "WhatsApp", label: "WhatsApp" },
  { value: "SMS", label: "SMS" },
  { value: "Email", label: "Email" },
];

export function IGU_17_SELECT_1() {
  return (
    <Select
      label="Plataforma"
      options={PLATAFORMA_OPTIONS}
      value="WhatsApp"
      id="igu-17-select-1"
    />
  );
}
