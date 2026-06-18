import type { Meta, StoryObj } from "@storybook/react-vite";
import { AttendanceTable } from "./AttendanceTable";

const meta: Meta<typeof AttendanceTable> = {
  title:
    "Requisitos/Gestión de Asistencias/IGU-22 (Consulta)/TAB-1 — Tabla de asistencias",
  component: AttendanceTable,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AttendanceTable>;

export const Default: Story = {};
