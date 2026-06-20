import type { Meta, StoryObj } from "@storybook/react-vite";
import { FechaDesdeFilter } from "./FechaDesdeFilter";

const meta: Meta<typeof FechaDesdeFilter> = {
  title: "Requisitos/Notificaciones/IGU-26 (Consulta)/SELECT-2 — Fecha desde",
  component: FechaDesdeFilter,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof FechaDesdeFilter>;

export const Default: Story = {};
