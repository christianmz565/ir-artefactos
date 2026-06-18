import { Input } from "@/components/Input/Input";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function NombreInput({ value, onChange }: Props) {
  return (
    <Input
      label="Nombre"
      placeholder="Nombre de la plataforma"
      value={value}
      onChange={onChange}
      id="plataforma-nombre"
    />
  );
}
