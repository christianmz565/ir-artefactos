import Form from "react-bootstrap/Form";

export function IGU_17_INP_1() {
  return (
    <Form.Group className="mb-3" controlId="igu-17-inp-1">
      <Form.Label>Mensaje</Form.Label>
      <Form.Control
        as="textarea"
        rows={4}
        value=""
        placeholder="Ingrese el mensaje a enviar"
      />
      <Form.Text className="text-muted">
        Variables disponibles: {"{{nombreEstudiante}}"}, {"{{fecha}}"},{" "}
        {"{{hora}}"}.
      </Form.Text>
    </Form.Group>
  );
}
