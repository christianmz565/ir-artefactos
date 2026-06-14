import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../BTN";

const meta: Meta<typeof Button> = {
  title: "Requisitos/Gestión de Estudiantes/Elementos/IGU-1-BTN-1 (Agregar)",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const AddButton: Story = {
  name: "IGU-1-BTN-1 (Add)",
  args: {
    children: "+ Agregar Estudiante",
    variant: "primary",
  },
};
