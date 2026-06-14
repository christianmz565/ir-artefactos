import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../BTN";

const meta: Meta<typeof Button> = {
  title: "Requisitos/Gestión de Estudiantes/Elementos/IGU-1-BTN-2 (Editar)",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const EditButton: Story = {
  name: "IGU-1-BTN-2 (Edit)",
  args: {
    children: "Editar",
    variant: "secondary",
    size: "sm",
  },
};
