import type { Meta, StoryObj } from "@storybook/react-vite";
import { CorreoInput } from "./CorreoInput";

const meta: Meta<typeof CorreoInput> = {
  title:
    "Requisitos/Gestión de Auxiliares/IGU-1 (Creación)/Formulario/CampoCorreo",
  component: CorreoInput,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof CorreoInput>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};

export const ConValor: Story = {
  args: {
    value: "maria.quispe@edu.pe",
    onChange: () => {},
  },
};
