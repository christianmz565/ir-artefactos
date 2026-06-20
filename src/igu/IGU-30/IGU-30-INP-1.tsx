import Form from "react-bootstrap/Form";

export function IGU_30_INP_1() {
  return (
    <Form.Group controlId="igu-30-inp-1">
      <Form.Label>Plantilla de Mensaje</Form.Label>
      <Form.Control
        as="textarea"
        rows={4}
        value=""
        placeholder="Ingrese la plantilla. Use {{variables}}."
      />
      <Form.Text className="text-muted">
        Variables disponibles: {"{{nombreEstudiante}}"}, {"{{fecha}}"},{" "}
        {"{{hora}}"}.
      </Form.Text>
    </Form.Group>
  );
}
