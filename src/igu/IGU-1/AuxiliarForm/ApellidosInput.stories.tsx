import type { Meta, StoryObj } from "@storybook/react-vite";
import { ApellidosInput } from "./ApellidosInput";

const meta: Meta<typeof ApellidosInput> = {
  title:
    "Requisitos/Gestión de Auxiliares/IGU-1 (Creación)/Formulario/CampoApellidos",
  component: ApellidosInput,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ApellidosInput>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};

export const ConValor: Story = {
  args: {
    value: "Quispe Mamani",
    onChange: () => {},
  },
};
