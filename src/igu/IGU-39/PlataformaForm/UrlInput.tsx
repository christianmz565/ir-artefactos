import { Input } from "@/components/Input/Input";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function UrlInput({ value, onChange }: Props) {
  return (
    <Input
      label="URL del servicio"
      placeholder="https://api.ejemplo.com"
      value={value}
      onChange={onChange}
      id="plataforma-url"
    />
  );
}
