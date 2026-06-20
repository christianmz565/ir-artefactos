import type { Meta, StoryObj } from "@storybook/react-vite";
import { DeleteConfirm } from "./DeleteConfirm";

const meta: Meta<typeof DeleteConfirm> = {
  title:
    "Requisitos/Gestión de Asistencias/IGU-23 (Eliminar)/MDL-1 — Confirmar eliminación",
  component: DeleteConfirm,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof DeleteConfirm>;

export const Default: Story = {};
