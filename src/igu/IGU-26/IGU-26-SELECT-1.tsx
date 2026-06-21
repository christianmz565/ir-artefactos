import { Select } from "@/components/Select/Select";
import { MOCK_PLATFORM_OPTIONS } from "@/mocks/notificaciones";

export function IGU_26_SELECT_1() {
  return (
    <Select
      label="Plataforma"
      options={[{ value: "", label: "Todas" }, ...MOCK_PLATFORM_OPTIONS]}
      value=""
      id="igu-26-select-1"
    />
  );
}
