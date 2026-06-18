import { Select } from "@/components/Select/Select";
import { MOCK_PERMISO_OPTIONS } from "@/mocks/roles";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function PermisosSelect({ value, onChange }: Props) {
  return (
    <Select
      label="Permisos"
      options={MOCK_PERMISO_OPTIONS}
      value={value}
      onChange={onChange}
      id="rol-permisos"
    />
  );
}
