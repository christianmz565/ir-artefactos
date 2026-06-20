import { Select } from "@/components/Select/Select";
import { MOCK_ESTADO_NOTIFICACION_OPTIONS } from "@/mocks/notificaciones";

export function SelectEstado() {
  return (
    <Select
      label="Estado"
      options={[
        { value: "", label: "Todos" },
        ...MOCK_ESTADO_NOTIFICACION_OPTIONS,
      ]}
      id="SELECT-ESTADO-NOTIFICACION"
    />
  );
}
