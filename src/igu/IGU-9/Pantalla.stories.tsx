import type { Meta, StoryObj } from "@storybook/react";
import { Pantalla } from "./Pantalla";

const meta = {
  title: "Requisitos/Gestión de Reportes/IGU-9 (Listar Reportes)/Pantalla",
  component: Pantalla,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Pantalla>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
