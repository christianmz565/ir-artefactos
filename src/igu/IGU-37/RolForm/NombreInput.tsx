import { Input } from "@/components/Input/Input";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function NombreInput({ value, onChange }: Props) {
  return (
    <Input
      label="Nombre del rol"
      placeholder="Ingrese el nombre del rol"
      value={value}
      onChange={onChange}
      id="rol-nombre"
    />
  );
}
