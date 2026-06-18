import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Componentes/ALT — Alerta",
  component: Alert,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  name: "Variante: Success",
  args: {
    variant: "success",
    message: "La operación fue exitosa.",
  },
};

export const Danger: Story = {
  name: "Variante: Danger",
  args: {
    variant: "danger",
    message: "Ocurrió un error y no se pudo realizar la operación.",
  },
};
