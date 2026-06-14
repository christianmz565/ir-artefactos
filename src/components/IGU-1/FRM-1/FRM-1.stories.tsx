import type { Meta, StoryObj } from "@storybook/react-vite";
import { StudentForm } from "../FRM";

const meta: Meta<typeof StudentForm> = {
  title: "Requisitos/Gestión de Estudiantes/IGU-1-FRM-1 Formulario Crear/Formulario",
  component: StudentForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StudentForm>;

export const Docs: Story = {
  args: {
    isEdit: false,
    onSave: (data) => console.log("Guardar:", data),
    onCancel: () => console.log("Cancelar"),
  },
};

export const FormDefault: Story = {
  name: "Formulario (Crear)",
  args: {
    isEdit: false,
    onSave: (data) => console.log("Guardar:", data),
    onCancel: () => console.log("Cancelar"),
  },
};
