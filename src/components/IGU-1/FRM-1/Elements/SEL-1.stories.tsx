import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "../../../SEL";

const meta: Meta<typeof Select> = {
  title: "Requisitos/Gestión de Estudiantes/IGU-1-FRM-1 Formulario Crear/Elementos/IGU-1-FRM-1-SEL-1 (Curso)",
  component: Select,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

const COURSE_OPTIONS = [
  { value: "CS", label: "Ciencias de la Computación" },
  { value: "Math", label: "Matemáticas" },
  { value: "Physics", label: "Física" },
];

export const Docs: Story = {
  args: {
    label: "Curso",
    options: COURSE_OPTIONS,
    value: "CS",
    id: "student-course",
  },
};

export const CourseSelect: Story = {
  name: "IGU-1-FRM-1-SEL-1 (Course)",
  args: {
    label: "Curso",
    options: COURSE_OPTIONS,
    value: "CS",
    id: "student-course",
  },
};
