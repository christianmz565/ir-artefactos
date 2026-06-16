import type { Meta, StoryObj } from "@storybook/react-vite";
import { NombresInput } from "./NombresInput";

const meta: Meta<typeof NombresInput> = {
  title:
    "Requisitos/Gestión de Auxiliares/IGU-1 (Creación)/Formulario/CampoNombres",
  component: NombresInput,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof NombresInput>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};

export const ConValor: Story = {
  args: {
    value: "María",
    onChange: () => {},
  },
};
