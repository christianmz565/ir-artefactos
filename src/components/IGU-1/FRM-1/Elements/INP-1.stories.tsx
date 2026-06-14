import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../../../INP";

const meta: Meta<typeof Input> = {
  title: "Requisitos/Gestión de Estudiantes/IGU-1-FRM-1 Formulario Crear/Elementos/IGU-1-FRM-1-INP-1 (Nombre)",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Docs: Story = {
  args: {
    label: "Nombre",
    placeholder: "Ingrese nombre completo",
    id: "student-name",
  },
};

export const NameInput: Story = {
  name: "IGU-1-FRM-1-INP-1 (Name)",
  args: {
    label: "Nombre",
    placeholder: "Ingrese nombre completo",
    id: "student-name",
  },
};
