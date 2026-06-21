import { Select } from "@/components/Select/Select";
import { MOCK_NOTIFICATION_STATUS_OPTIONS } from "@/mocks/notificaciones";

export function IGU_26_SELECT_2() {
  return (
    <Select
      label="Estado"
      options={[
        { value: "", label: "Todos" },
        ...MOCK_NOTIFICATION_STATUS_OPTIONS,
      ]}
      value=""
      id="igu-26-select-2"
    />
  );
}
