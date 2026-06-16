import type { Meta, StoryObj } from "@storybook/react-vite";
import { StudentForm } from "./StudentForm";

const meta: Meta<typeof StudentForm> = {
  title: "Requisitos/Gestión de Estudiantes/IGU-6 (Creación)/Formulario",
  component: StudentForm,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof StudentForm>;

export const Default: Story = {};
