import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pantalla } from "./Pantalla";

const meta: Meta<typeof Pantalla> = {
  title: "Requisitos/Gestión de Asistencias/IGU-19 (Editar)/Pantalla",
  component: Pantalla,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Pantalla>;

export const Default: Story = {};
