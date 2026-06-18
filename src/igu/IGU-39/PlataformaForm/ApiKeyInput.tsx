import { Input } from "@/components/Input/Input";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function ApiKeyInput({ value, onChange }: Props) {
  return (
    <Input
      label="API Key / Token"
      placeholder="Ingrese la clave de acceso"
      value={value}
      onChange={onChange}
      id="plataforma-apikey"
    />
  );
}
