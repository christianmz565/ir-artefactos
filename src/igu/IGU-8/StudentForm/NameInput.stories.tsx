import type { Meta, StoryObj } from "@storybook/react-vite";
import { NameInput } from "./NameInput";

const meta: Meta<typeof NameInput> = {
  title:
    "Requisitos/Gestión de Estudiantes/IGU-8 (Edición)/Formulario/CampoNombre",
  component: NameInput,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof NameInput>;

export const Default: Story = {
  args: {
    value: "Alice Johnson",
    onChange: () => {},
  },
};

export const Vacío: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};
