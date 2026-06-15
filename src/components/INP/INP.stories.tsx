import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./INP";

const meta: Meta<typeof Input> = {
  title: "Componentes/INP",
  component: Input,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { placeholder: "Placeholder" },
};

export const WithLabel: Story = {
  name: "Con etiqueta",
  args: { label: "Nombre", placeholder: "Ingrese su nombre" },
};

export const WithValue: Story = {
  name: "Con valor controlado",
  args: {
    label: "Correo",
    value: "usuario@ejemplo.com",
    placeholder: "correo@ejemplo.com",
  },
};
