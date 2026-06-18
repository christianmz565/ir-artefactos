import type { Meta, StoryObj } from "@storybook/react-vite";
import { RolTable } from "./RolTable";

const meta: Meta<typeof RolTable> = {
  title: "Requisitos/Gestión de Roles/IGU-36 (Consulta)/TAB-1 — Tabla de roles",
  component: RolTable,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof RolTable>;

export const Default: Story = {};
