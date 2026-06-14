import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../BTN";

const meta: Meta<typeof Button> = {
  title: "Requisitos/Gestión de Estudiantes/Elementos/IGU-1-BTN-3 (Eliminar)",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const DeleteButton: Story = {
  name: "IGU-1-BTN-3 (Delete)",
  args: {
    children: "Eliminar",
    variant: "danger",
    size: "sm",
  },
};
