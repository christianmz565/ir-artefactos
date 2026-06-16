import { Input } from "@/components/Input/Input";

interface ApellidosInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function ApellidosInput({ value, onChange }: ApellidosInputProps) {
  return (
    <Input
      label="Apellidos"
      placeholder="Ingrese los apellidos del auxiliar"
      value={value}
      onChange={onChange}
      id="auxiliar-apellidos"
    />
  );
}
