import type { Meta, StoryObj } from "@storybook/react-vite";
import { FechaDesdeField } from "./FechaDesdeField";

const meta: Meta<typeof FechaDesdeField> = {
  title: "Requisitos/Reportes/IGU-25 (Generador)/INP-1 — Fecha desde",
  component: FechaDesdeField,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof FechaDesdeField>;

export const Default: Story = {};
