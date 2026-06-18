import type { Meta, StoryObj } from "@storybook/react-vite";
import { AddAsistenciaButton } from "./AddAsistenciaButton";

const meta: Meta<typeof AddAsistenciaButton> = {
  title:
    "Requisitos/Gestión de Asistencias/IGU-22 (Consulta)/BTN-1 — Agregar asistencia",
  component: AddAsistenciaButton,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AddAsistenciaButton>;

export const Default: Story = {};
