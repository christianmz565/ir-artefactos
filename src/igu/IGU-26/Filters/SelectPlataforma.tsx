import { Select } from "@/components/Select/Select";
import { MOCK_PLATAFORMA_OPTIONS } from "@/mocks/notificaciones";

export function SelectPlataforma() {
  return (
    <Select
      label="Plataforma"
      options={[{ value: "", label: "Todas" }, ...MOCK_PLATAFORMA_OPTIONS]}
      id="SELECT-PLATAFORMA"
    />
  );
}
