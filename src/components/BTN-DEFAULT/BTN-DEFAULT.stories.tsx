import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./BTN-DEFAULT";

const meta: Meta<typeof Button> = {
  title: "Componentes/BTN-DEFAULT",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger", "success", "warning", "info"],
    },
    size: { control: { type: "select" }, options: ["sm", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Botón" },
};

export const Primary: Story = {
  name: "Variante: Primary",
  args: { children: "Guardar", variant: "primary" },
};

export const Secondary: Story = {
  name: "Variante: Secondary",
  args: { children: "Cancelar", variant: "secondary" },
};

export const Danger: Story = {
  name: "Variante: Danger",
  args: { children: "Eliminar", variant: "danger" },
};

export const Small: Story = {
  name: "Tamaño: Pequeño",
  args: { children: "Editar", size: "sm" },
};

export const Disabled: Story = {
  name: "Deshabilitado",
  args: { children: "No disponible", disabled: true },
};
