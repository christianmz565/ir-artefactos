import { Input } from "@/components/Input/Input";

interface NameInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function NameInput({ value, onChange }: NameInputProps) {
  return (
    <Input
      label="Nombre"
      placeholder="Ingrese nombre completo"
      value={value}
      onChange={onChange}
      id="student-name"
    />
  );
}
