import type { Meta, StoryObj } from "@storybook/react-vite";
import { FechaDesdeFilter } from "./FechaDesdeFilter";

const meta: Meta<typeof FechaDesdeFilter> = {
  title:
    "Requisitos/Gestión de Asistencias/IGU-22 (Consulta)/SELECT-2 — Fecha desde",
  component: FechaDesdeFilter,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof FechaDesdeFilter>;

export const Default: Story = {};
