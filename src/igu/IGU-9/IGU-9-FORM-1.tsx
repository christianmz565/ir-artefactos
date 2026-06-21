import Form from "react-bootstrap/Form";
import { MOCK_SPECIALTY_OPTIONS } from "@/mocks/profesores";

export function IGU_9_FORM_1() {
  return (
    <Form.Group controlId="igu-9-form-1" className="mb-3">
      <Form.Label>Especialidades</Form.Label>
      <div
        className="border p-3 rounded"
        style={{ maxHeight: "180px", overflowY: "auto" }}
      >
        {MOCK_SPECIALTY_OPTIONS.map((opt) => (
          <Form.Check
            key={opt.value}
            type="checkbox"
            id={`igu-9-form-1-${opt.value}`}
            label={opt.label}
          />
        ))}
      </div>
    </Form.Group>
  );
}
