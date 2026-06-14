import type { Meta, StoryObj } from "@storybook/react-vite";
import { StudentForm } from "../FRM";

const meta: Meta<typeof StudentForm> = {
  title: "Requisitos/Gestión de Estudiantes/IGU-1-FRM-2 Formulario Editar/Formulario",
  component: StudentForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StudentForm>;

export const Docs: Story = {
  args: {
    isEdit: true,
    initialData: {
      name: "Alice Johnson",
      email: "alice@example.com",
      course: "CS",
    },
    onSave: (data) => console.log("Actualizar:", data),
    onCancel: () => console.log("Cancelar"),
  },
};

export const FormDefault: Story = {
  name: "Formulario (Editar)",
  args: {
    isEdit: true,
    initialData: {
      name: "Alice Johnson",
      email: "alice@example.com",
      course: "CS",
    },
    onSave: (data) => console.log("Actualizar:", data),
    onCancel: () => console.log("Cancelar"),
  },
};
