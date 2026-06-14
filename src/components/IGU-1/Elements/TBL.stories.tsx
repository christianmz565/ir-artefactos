import type { Meta, StoryObj } from "@storybook/react-vite";
import { StudentTable } from "../TBL";

const meta: Meta<typeof StudentTable> = {
  title: "Requisitos/Gestión de Estudiantes/Elementos/IGU-1-TBL-1 (Tabla Estudiantes)",
  component: StudentTable,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StudentTable>;

const SAMPLE_STUDENTS = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", course: "CS" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", course: "Math" },
  { id: 3, name: "Carol White", email: "carol@example.com", course: "Physics" },
  { id: 4, name: "David Brown", email: "david@example.com", course: "CS" },
];

export const Docs: Story = {
  args: {
    students: SAMPLE_STUDENTS,
    onEdit: (s) => console.log("Editar:", s),
    onDelete: (id) => console.log("Eliminar:", id),
  },
};

export const TableWithStudents: Story = {
  name: "IGU-1-TBL-1 (With Students)",
  args: {
    students: SAMPLE_STUDENTS,
    onEdit: (s) => console.log("Editar:", s),
    onDelete: (id) => console.log("Eliminar:", id),
  },
};

export const TableEmpty: Story = {
  name: "IGU-1-TBL-1 (Empty)",
  args: {
    students: [],
    onEdit: () => {},
    onDelete: () => {},
  },
};
