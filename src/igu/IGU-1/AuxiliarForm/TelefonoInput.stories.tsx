import type { Meta, StoryObj } from "@storybook/react-vite";
import { TelefonoInput } from "./TelefonoInput";

const meta: Meta<typeof TelefonoInput> = {
  title:
    "Requisitos/Gestión de Auxiliares/IGU-1 (Creación)/Formulario/CampoTelefono",
  component: TelefonoInput,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof TelefonoInput>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};

export const ConValor: Story = {
  args: {
    value: "987654321",
    onChange: () => {},
  },
};
