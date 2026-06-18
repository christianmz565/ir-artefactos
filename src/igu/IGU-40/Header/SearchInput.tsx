import { Input } from "@/components/Input/Input";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <Input
      placeholder="Buscar por nombre..."
      value={value}
      onChange={onChange}
      id="search-plataformas"
    />
  );
}
