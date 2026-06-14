import Container from "react-bootstrap/Container";
import { StudentForm } from "./StudentForm/StudentForm";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Editar Estudiante</h1>
      <StudentForm />
    </Container>
  );
}
