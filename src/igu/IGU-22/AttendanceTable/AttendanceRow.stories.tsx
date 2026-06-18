import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_ASISTENCIAS } from "@/mocks/asistencias";
import { AttendanceRow } from "./AttendanceRow";

const meta: Meta<typeof AttendanceRow> = {
  title:
    "Requisitos/Gestión de Asistencias/IGU-22 (Consulta)/TAB-1 — Fila de asistencia",
  component: AttendanceRow,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AttendanceRow>;

export const Default: Story = {
  args: {
    asistencia: MOCK_ASISTENCIAS[0],
  },
};

export const Tardanza: Story = {
  args: {
    asistencia: MOCK_ASISTENCIAS[1],
  },
};

export const Falta: Story = {
  args: {
    asistencia: MOCK_ASISTENCIAS[3],
  },
};
