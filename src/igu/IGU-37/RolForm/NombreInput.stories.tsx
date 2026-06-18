import type { Meta, StoryObj } from "@storybook/react-vite";
import { NombreInput } from "./NombreInput";

const meta: Meta<typeof NombreInput> = {
  title: "Requisitos/Gestión de Roles/IGU-37 (Edición)/Formulario/CampoNombre",
  component: NombreInput,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof NombreInput>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};

export const ConValor: Story = {
  args: {
    value: "Administrador",
    onChange: () => {},
  },
};
