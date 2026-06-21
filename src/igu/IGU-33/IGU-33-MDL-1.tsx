import Form from "react-bootstrap/Form";

const mockEstudiantes = [
  { id: 1, nombre: "Juan Pérez", checked: true },
  { id: 2, nombre: "Ana Ruiz", checked: false },
  { id: 3, nombre: "Luis Gómez", checked: true },
  { id: 4, nombre: "Pedro Martínez", checked: false },
];

export function IGU_33_MDL_1() {
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
            id={`igu-33-mdl-1-${est.id}`}
            label={est.nombre}
            defaultChecked={est.checked}
          />
        ))}
      </div>
    </Form.Group>
  );
}
