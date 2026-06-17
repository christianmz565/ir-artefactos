import Container from "react-bootstrap/Container";
import { ApoderadoForm } from "./ApoderadoForm/ApoderadoForm";

const mockEstudiantes = [
  { id: 1, nombre: "Juan Pérez" },
  { id: 2, nombre: "Ana Ruiz" },
  { id: 3, nombre: "Luis Gómez" },
];

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Registrar Apoderado</h1>
      <ApoderadoForm
        estudiantesDisponibles={mockEstudiantes}
        onSubmit={(data) =>
          alert(`Apoderado Registrado:\n${JSON.stringify(data, null, 2)}`)
        }
        onCancel={() => alert("Registro cancelado")}
      />
    </Container>
  );
}
