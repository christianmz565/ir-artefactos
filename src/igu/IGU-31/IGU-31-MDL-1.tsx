import Form from "react-bootstrap/Form";

const mockEstudiantes = [
  { id: 1, nombre: "Juan Pérez" },
  { id: 2, nombre: "Ana Ruiz" },
  { id: 3, nombre: "Luis Gómez" },
  { id: 4, nombre: "Pedro Martínez" },
];

export function IGU_31_MDL_1() {
  return (
    <Form.Group className="mb-4">
      <Form.Label>Estudiantes Asociados (Seleccionar al menos uno)</Form.Label>
      <div
        className="border p-3 rounded"
        style={{ maxHeight: "150px", overflowY: "auto" }}
      >
        {mockEstudiantes.map((est) => (
          <Form.Check
            key={est.id}
            type="checkbox"
            id={`igu-31-mdl-1-${est.id}`}
            label={est.nombre}
          />
        ))}
      </div>
    </Form.Group>
  );
}
