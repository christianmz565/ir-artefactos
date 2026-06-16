import type { Meta, StoryObj } from "@storybook/react-vite";
import { AuxiliarTable } from "./AuxiliarTable";

const meta: Meta<typeof AuxiliarTable> = {
  title:
    "Requisitos/Gestión de Auxiliares/IGU-2 (Lista)/TAB-1 — Tabla de auxiliares",
  component: AuxiliarTable,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AuxiliarTable>;

export const Default: Story = {};
