import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "../../SEL";

const meta: Meta<typeof Select> = {
  title: "Requisitos/Gestión de Estudiantes/Elementos/IGU-1-SEL-1 (Filtro Curso)",
  component: Select,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

const FILTER_OPTIONS = [
  { value: "", label: "Todos los Cursos" },
  { value: "CS", label: "Ciencias de la Computación" },
  { value: "Math", label: "Matemáticas" },
  { value: "Physics", label: "Física" },
];

export const CourseFilter: Story = {
  name: "IGU-1-SEL-1 (Course Filter)",
  args: {
    options: FILTER_OPTIONS,
    id: "filter-course",
  },
};
