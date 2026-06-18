import type { Meta, StoryObj } from "@storybook/react-vite";
import { StudentRow } from "./StudentRow";

const meta: Meta<typeof StudentRow> = {
  title:
    "Requisitos/Gestión de Estudiantes/IGU-7 (Lista)/TAB-1 — Fila de estudiante",
  component: StudentRow,
  tags: ["autodocs"],
  argTypes: {
    id: { control: "number" },
    name: { control: "text" },
    email: { control: "text" },
    course: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof StudentRow>;

export const Default: Story = {
  args: {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    course: "CS",
  },
};

export const ConAcciones: Story = {
  args: {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    course: "CS",
    onEdit: () => alert("Editar clicked"),
    onDelete: () => alert("Eliminar clicked"),
  },
};
