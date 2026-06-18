import { Input } from "@/components/Input/Input";

interface EstudianteFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function EstudianteField({ value, onChange }: EstudianteFieldProps) {
  return (
    <Input
      label="Estudiante específico (Opcional)"
      placeholder="Buscar estudiante..."
      value={value}
      onChange={onChange}
      id="report-estudiante"
    />
  );
}
