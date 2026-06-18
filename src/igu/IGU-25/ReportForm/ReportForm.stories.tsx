import type { Meta, StoryObj } from "@storybook/react-vite";
import { ReportForm } from "./ReportForm";

const meta: Meta<typeof ReportForm> = {
  title:
    "Requisitos/Reportes/IGU-25 (Generador)/FORM-1 — Formulario de reporte",
  component: ReportForm,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ReportForm>;

export const Default: Story = {};
