import Form from "react-bootstrap/Form";

interface TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  id?: string;
}

export function TextInput({
  label,
  placeholder,
  value,
  onChange,
  id,
}: TextInputProps) {
  return (
    <Form.Group controlId={id}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </Form.Group>
  );
}
