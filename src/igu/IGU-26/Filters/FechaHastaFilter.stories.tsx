import type { Meta, StoryObj } from "@storybook/react-vite";
import { FechaHastaFilter } from "./FechaHastaFilter";

const meta: Meta<typeof FechaHastaFilter> = {
  title: "Requisitos/Notificaciones/IGU-26 (Consulta)/SELECT-2 — Fecha hasta",
  component: FechaHastaFilter,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof FechaHastaFilter>;

export const Default: Story = {};
