import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModulosSelect } from "./ModulosSelect";

const meta: Meta<typeof ModulosSelect> = {
  title:
    "Requisitos/Gestión de Auxiliares/IGU-1 (Creación)/Formulario/CampoModulos",
  component: ModulosSelect,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ModulosSelect>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};

export const ConValor: Story = {
  args: {
    value: "Primaria - 3A",
    onChange: () => {},
  },
};
