import Form from "react-bootstrap/Form";
import { MOCK_FORMATO_REPORTE_OPTIONS } from "@/mocks/reportes";

interface FormatoFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function FormatoField({ value, onChange }: FormatoFieldProps) {
  return (
    <Form.Group controlId="report-formato" className="mb-3">
      <Form.Label>Formato de archivo</Form.Label>
      <div>
        {MOCK_FORMATO_REPORTE_OPTIONS.map((opt) => (
          <Form.Check
            key={opt.value}
            type="radio"
            name="formato"
            id={`formato-${opt.value}`}
            label={opt.label}
            value={opt.value}
            checked={value === opt.value}
            onChange={(e) => onChange(e.target.value)}
          />
        ))}
      </div>
    </Form.Group>
  );
}
