import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const UI_LIST = [
  {
    path: "/students/management/",
    title: "Students Management",
    description: "Manage student records, courses, and enrollments.",
  },
];

export function Home() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Available UIs</h1>
      <div className="d-flex flex-wrap gap-3">
        {UI_LIST.map((ui) => (
          <Card key={ui.path} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{ui.title}</Card.Title>
              <Card.Text>{ui.description}</Card.Text>
              <Link to={ui.path} className="btn btn-primary">
                Open
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}
