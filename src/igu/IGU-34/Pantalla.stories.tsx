import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pantalla } from "./Pantalla";

const meta = {
  title: "Requisitos/Gestión de Apoderados/IGU-34 (Inactivar)/Pantalla",
  component: Pantalla,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Pantalla>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
