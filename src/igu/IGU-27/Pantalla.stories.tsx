import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pantalla } from "./Pantalla";

const meta: Meta<typeof Pantalla> = {
  title: "Requisitos/Notificaciones/IGU-27 (Eliminar)/Pantalla",
  component: Pantalla,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Pantalla>;

export const Default: Story = {};
