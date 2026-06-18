import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmailInput } from "./EmailInput";

const meta: Meta<typeof EmailInput> = {
  title:
    "Requisitos/Gestión de Estudiantes/IGU-8 (Edición)/Formulario/CampoEmail",
  component: EmailInput,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof EmailInput>;

export const Default: Story = {
  args: {
    value: "alice@example.com",
    onChange: () => {},
  },
};

export const Vacío: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};
