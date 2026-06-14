import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../../BTN";

const meta: Meta<typeof Button> = {
  title: "Requisitos/Gestión de Estudiantes/IGU-1-FRM-2 Formulario Editar/Elementos/IGU-1-FRM-2-BTN-2 (Cancelar)",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Docs: Story = {
  args: {
    children: "Cancelar",
    variant: "secondary",
  },
};

export const CancelButton: Story = {
  name: "IGU-1-FRM-2-BTN-2 (Cancel)",
  args: {
    children: "Cancelar",
    variant: "secondary",
  },
};
