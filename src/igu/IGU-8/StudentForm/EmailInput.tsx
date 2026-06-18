import { Input } from "@/components/Input/Input";

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function EmailInput({ value, onChange }: EmailInputProps) {
  return (
    <Input
      label="Correo electrónico"
      value={value}
      onChange={onChange}
      id="student-email"
    />
  );
}
