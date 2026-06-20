import { Input } from "@/components/Input/Input";

interface SearchEstudianteProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchEstudiante({ value, onChange }: SearchEstudianteProps) {
  return (
    <Input
      placeholder="Buscar por nombre o DNI..."
      value={value}
      onChange={onChange}
      id="search-estudiante"
    />
  );
}
