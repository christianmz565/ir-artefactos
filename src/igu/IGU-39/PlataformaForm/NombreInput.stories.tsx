import type { Meta, StoryObj } from "@storybook/react-vite";
import { NombreInput } from "./NombreInput";

const meta: Meta<typeof NombreInput> = {
  title:
    "Requisitos/Gestión de Plataformas/IGU-39 (Creación)/Formulario/CampoNombre",
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
    value: "WhatsApp Business",
    onChange: () => {},
  },
};
