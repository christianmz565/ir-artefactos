import { Input } from "@/components/Input/Input";

interface CorreoInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function CorreoInput({ value, onChange }: CorreoInputProps) {
  return (
    <Input
      label="Correo electrónico"
      placeholder="Ingrese dirección de correo"
      value={value}
      onChange={onChange}
      id="auxiliar-correo"
    />
  );
}
