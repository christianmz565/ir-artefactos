import type { Meta, StoryObj } from "@storybook/react-vite";
import { NameInput } from "./NameInput";

const meta: Meta<typeof NameInput> = {
  title:
    "Requisitos/Gestión de Estudiantes/IGU-6 (Creación)/Formulario/CampoNombre",
  component: NameInput,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof NameInput>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};

export const ConValor: Story = {
  args: {
    value: "Alice Johnson",
    onChange: () => {},
  },
};
