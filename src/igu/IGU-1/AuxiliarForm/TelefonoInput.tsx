import { Input } from "@/components/Input/Input";

interface TelefonoInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function TelefonoInput({ value, onChange }: TelefonoInputProps) {
  return (
    <Input
      label="Teléfono"
      placeholder="Ingrese número de teléfono"
      value={value}
      onChange={onChange}
      id="auxiliar-telefono"
    />
  );
}
