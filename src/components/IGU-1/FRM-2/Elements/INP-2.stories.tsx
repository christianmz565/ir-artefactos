import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../../../INP";

const meta: Meta<typeof Input> = {
  title: "Requisitos/Gestión de Estudiantes/IGU-1-FRM-2 Formulario Editar/Elementos/IGU-1-FRM-2-INP-2 (Correo)",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Docs: Story = {
  args: {
    label: "Correo electrónico",
    placeholder: "Ingrese dirección de correo",
    id: "student-email",
  },
};

export const EmailInput: Story = {
  name: "IGU-1-FRM-2-INP-2 (Email)",
  args: {
    label: "Correo electrónico",
    placeholder: "Ingrese dirección de correo",
    id: "student-email",
  },
};
