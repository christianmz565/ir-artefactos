import type { Student } from "@/types/student";

export const MOCK_STUDENTS: Student[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", course: "CS" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", course: "Math" },
  { id: 3, name: "Carol White", email: "carol@example.com", course: "Physics" },
  { id: 4, name: "David Brown", email: "david@example.com", course: "CS" },
];

export const MOCK_COURSE_OPTIONS = [
  { value: "", label: "Todos los Cursos" },
  { value: "CS", label: "Ciencias de la Computación" },
  { value: "Math", label: "Matemáticas" },
  { value: "Physics", label: "Física" },
];

export const MOCK_FORM_COURSE_OPTIONS = [
  { value: "CS", label: "Ciencias de la Computación" },
  { value: "Math", label: "Matemáticas" },
  { value: "Physics", label: "Física" },
];
