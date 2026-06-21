import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pantalla } from "./Pantalla";

const meta: Meta<typeof Pantalla> = {
  title: "Requisitos/Gestión de Roles/IGU-36 (Consultar)/Pantalla",
  component: Pantalla,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Pantalla>;

export const Default: Story = {};
