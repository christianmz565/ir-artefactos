import { useState } from "react";
import Card from "react-bootstrap/Card";
import { TextInput } from "./TextInput";
import { SelectInput } from "./SelectInput";
import { ActionButton } from "./ActionButton";

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
  { value: "CS", label: "Computer Science" },
  { value: "Math", label: "Mathematics" },
  { value: "Physics", label: "Physics" },
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
        <Card.Title>{isEdit ? "Edit Student" : "Add New Student"}</Card.Title>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Name"
            placeholder="Enter full name"
            value={formData.name}
            onChange={(v) => setFormData({ ...formData, name: v })}
            id="student-name"
          />
          <TextInput
            label="Email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={(v) => setFormData({ ...formData, email: v })}
            id="student-email"
          />
          <SelectInput
            label="Course"
            options={COURSE_OPTIONS}
            value={formData.course}
            onChange={(v) => setFormData({ ...formData, course: v })}
            id="student-course"
          />
          <div className="d-flex gap-2 mt-3">
            <ActionButton type="submit">
              {isEdit ? "Update" : "Save"}
            </ActionButton>
            <ActionButton variant="secondary" onClick={onCancel}>
              Cancel
            </ActionButton>
          </div>
        </form>
      </Card.Body>
    </Card>
  );
}
