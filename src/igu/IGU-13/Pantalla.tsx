import Container from "react-bootstrap/Container";
import { ApoderadoForm } from "@/igu/IGU-11/ApoderadoForm/ApoderadoForm";
import { MOCK_APODERADOS } from "@/mocks/apoderados";

const mockEstudiantes = [
  { id: 1, nombre: "Juan Pérez" },
  { id: 2, nombre: "Ana Ruiz" },
  { id: 3, nombre: "Luis Gómez" },
];

export function Pantalla() {
  const apoderado = MOCK_APODERADOS[0];

  return (
    <Container className="py-4">
      <h1 className="mb-4">Actualizar Apoderado</h1>
      <ApoderadoForm
        initialData={apoderado}
        estudiantesDisponibles={mockEstudiantes}
        onSubmit={(data) =>
          alert(`Apoderado Actualizado:\n${JSON.stringify(data, null, 2)}`)
        }
        onCancel={() => alert("Actualización cancelada")}
      />
    </Container>
  );
}
