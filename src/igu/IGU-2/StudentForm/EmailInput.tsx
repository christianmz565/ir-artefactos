import { Input } from "@/components/INP/INP";

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function EmailInput({ value, onChange }: EmailInputProps) {
  return (
    <Input
      label="Correo electrónico"
      placeholder="Ingrese dirección de correo"
      value={value}
      onChange={onChange}
      id="student-email"
    />
  );
}
