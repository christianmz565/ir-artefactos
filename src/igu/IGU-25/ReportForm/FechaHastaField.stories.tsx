import type { Meta, StoryObj } from "@storybook/react-vite";
import { FechaHastaField } from "./FechaHastaField";

const meta: Meta<typeof FechaHastaField> = {
  title: "Requisitos/Reportes/IGU-25 (Generador)/INP-1 — Fecha hasta",
  component: FechaHastaField,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof FechaHastaField>;

export const Default: Story = {};
