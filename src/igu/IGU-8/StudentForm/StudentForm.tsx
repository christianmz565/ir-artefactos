import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { CourseSelect } from "./CourseSelect";
import { EmailInput } from "./EmailInput";
import { FormButtons } from "./FormButtons";
import { NameInput } from "./NameInput";

export function StudentForm() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Editar Estudiante</Card.Title>
        <Form>
          <NameInput value="Alice Johnson" onChange={() => {}} />
          <EmailInput value="alice@example.com" onChange={() => {}} />
          <CourseSelect value="CS" onChange={() => {}} />
          <FormButtons />
        </Form>
      </Card.Body>
    </Card>
  );
}
