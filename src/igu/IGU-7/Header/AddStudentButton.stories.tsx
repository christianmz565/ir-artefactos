import type { Meta, StoryObj } from "@storybook/react-vite";
import { AddStudentButton } from "./AddStudentButton";

const meta: Meta<typeof AddStudentButton> = {
  title:
    "Requisitos/Gestión de Estudiantes/IGU-7 (Lista)/BTN-1 — Agregar estudiante",
  component: AddStudentButton,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AddStudentButton>;

export const Default: Story = {};
