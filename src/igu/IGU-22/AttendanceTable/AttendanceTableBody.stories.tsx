import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_ASISTENCIAS } from "@/mocks/asistencias";
import { AttendanceTableBody } from "./AttendanceTableBody";

const meta: Meta<typeof AttendanceTableBody> = {
  title:
    "Requisitos/Gestión de Asistencias/IGU-22 (Consulta)/TAB-1 — Cuerpo de tabla",
  component: AttendanceTableBody,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AttendanceTableBody>;

export const Default: Story = {
  args: {
    assistances: MOCK_ASISTENCIAS,
  },
};

export const Vacio: Story = {
  args: {
    assistances: [],
  },
};
