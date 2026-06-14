import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Input } from "../INP";
import { Select } from "../SEL";
import { Button } from "../BTN";

export interface StudentFormData {
  name: string;
  email: string;
  course: string;
}

interface StudentFormProps {
  initialData?: StudentFormData;
  isEdit?: boolean;
  onSave: (data: StudentFormData) => void;
  onCancel: () => void;
}

const COURSE_OPTIONS = [
  { value: "CS", label: "Ciencias de la Computación" },
  { value: "Math", label: "Matemáticas" },
  { value: "Physics", label: "Física" },
];

export function StudentForm({
  initialData = { name: "", email: "", course: "CS" },
  isEdit = false,
  onSave,
  onCancel,
}: StudentFormProps) {
  const [formData, setFormData] = useState<StudentFormData>(initialData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      onSave(formData);
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{isEdit ? "Editar Estudiante" : "Agregar Nuevo Estudiante"}</Card.Title>
        <form onSubmit={handleSubmit}>
          <Input
            label="Nombre"
            placeholder="Ingrese nombre completo"
            value={formData.name}
            onChange={(v) => setFormData({ ...formData, name: v })}
            id="student-name"
          />
          <Input
            label="Correo electrónico"
            placeholder="Ingrese dirección de correo"
            value={formData.email}
            onChange={(v) => setFormData({ ...formData, email: v })}
            id="student-email"
          />
          <Select
            label="Curso"
            options={COURSE_OPTIONS}
            value={formData.course}
            onChange={(v) => setFormData({ ...formData, course: v })}
            id="student-course"
          />
          <div className="d-flex gap-2 mt-3">
            <Button type="submit">
              {isEdit ? "Actualizar" : "Guardar"}
            </Button>
            <Button variant="secondary" onClick={onCancel}>
              Cancelar
            </Button>
          </div>
        </form>
      </Card.Body>
    </Card>
  );
}
