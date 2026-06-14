import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { Select } from "@/components/Select/Select";
import { MOCK_FORM_COURSE_OPTIONS } from "@/mocks/students";

export function StudentForm() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Agregar Nuevo Estudiante</Card.Title>
        <Form>
          <Input
            label="Nombre"
            placeholder="Ingrese nombre completo"
            value=""
            onChange={() => {}}
            id="student-name"
          />
          <Input
            label="Correo electrónico"
            placeholder="Ingrese dirección de correo"
            value=""
            onChange={() => {}}
            id="student-email"
          />
          <Select
            label="Curso"
            options={MOCK_FORM_COURSE_OPTIONS}
            value="CS"
            onChange={() => {}}
            id="student-course"
          />
          <div className="d-flex mt-3 gap-2">
            <Button type="submit">Guardar</Button>
            <Button variant="secondary">Cancelar</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
