import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_STUDENTS } from "@/mocks/students";
import { StudentTableBody } from "./StudentTableBody";

const meta: Meta<typeof StudentTableBody> = {
  title:
    "Requisitos/Gestión de Estudiantes/IGU-1 (Lista)/TAB-1 — Cuerpo de tabla",
  component: StudentTableBody,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof StudentTableBody>;

export const Default: Story = {
  args: {
    students: MOCK_STUDENTS,
  },
};

export const Vacío: Story = {
  args: {
    students: [],
  },
};
