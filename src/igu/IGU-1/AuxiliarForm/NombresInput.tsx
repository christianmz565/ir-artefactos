import { Input } from "@/components/Input/Input";

interface NombresInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function NombresInput({ value, onChange }: NombresInputProps) {
  return (
    <Input
      label="Nombres"
      placeholder="Ingrese los nombres del auxiliar"
      value={value}
      onChange={onChange}
      id="auxiliar-nombres"
    />
  );
}
