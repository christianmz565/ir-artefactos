import Form from "react-bootstrap/Form";

export function IGU_16_INP_4() {
  return (
    <Form.Group className="mb-3" controlId="igu-16-inp-4">
      <Form.Label>Justificación (Opcional)</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        value=""
        placeholder="Detalle la justificación en caso de falta o tardanza"
      />
    </Form.Group>
  );
}
