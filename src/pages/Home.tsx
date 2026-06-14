import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const UI_LIST = [
  {
    path: "/students/management/",
    title: "Gestión de Estudiantes",
    description: "Administre registros de estudiantes, cursos e inscripciones.",
  },
];

export function Home() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Interfaces disponibles</h1>
      <div className="d-flex flex-wrap gap-3">
        {UI_LIST.map((ui) => (
          <Card key={ui.path} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{ui.title}</Card.Title>
              <Card.Text>{ui.description}</Card.Text>
              <Link to={ui.path} className="btn btn-primary">
                Abrir
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}
