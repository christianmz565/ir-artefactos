import type { Meta, StoryObj } from "@storybook/react-vite";
import { PlataformaTable } from "./PlataformaTable";

const meta: Meta<typeof PlataformaTable> = {
  title:
    "Requisitos/Gestión de Plataformas/IGU-40 (Consulta)/TAB-1 — Tabla de plataformas",
  component: PlataformaTable,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof PlataformaTable>;

export const Default: Story = {};
