import Form from "react-bootstrap/Form";

export function IGU_35_INP_2() {
  return (
    <Form.Group className="mb-4" controlId="igu-35-inp-2">
      <Form.Label>Descripción</Form.Label>
      <Form.Control
        as="textarea"
        rows={2}
        value=""
        placeholder="Propósito del rol"
      />
    </Form.Group>
  );
}
