import Form from "react-bootstrap/Form";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectInputProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  id?: string;
}

export function SelectInput({
  label,
  options,
  value,
  onChange,
  id,
}: SelectInputProps) {
  return (
    <Form.Group controlId={id}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}
