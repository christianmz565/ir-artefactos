import Form from "react-bootstrap/Form";

const FORMAT_OPTIONS = [
  { value: "PDF", label: "PDF" },
  { value: "Excel", label: "Excel" },
];

export function IGU_25_FORM_1() {
  return (
    <Form.Group controlId="igu-25-form-1" className="mb-3">
      <Form.Label>Formato de archivo</Form.Label>
      <div>
        {FORMAT_OPTIONS.map((opt) => (
          <Form.Check
            key={opt.value}
            type="radio"
            name="formato"
            id={`igu-25-form-1-${opt.value}`}
            label={opt.label}
            value={opt.value}
            defaultChecked={opt.value === "PDF"}
          />
        ))}
      </div>
    </Form.Group>
  );
}
