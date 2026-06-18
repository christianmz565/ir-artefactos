import type { Meta, StoryObj } from "@storybook/react-vite";
import { DetalleAsistencia } from "./Detaills";

const meta: Meta<typeof DetalleAsistencia> = {
  title: "Requisitos/Gestión de Asistencias/IGU-28 (Detalle)/Detalle",
  component: DetalleAsistencia,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof DetalleAsistencia>;

export const Default: Story = {};
