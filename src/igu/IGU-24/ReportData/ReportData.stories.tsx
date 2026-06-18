import type { Meta, StoryObj } from "@storybook/react-vite";
import { ReportData } from "./ReportData";

const meta: Meta<typeof ReportData> = {
  title: "Requisitos/Reportes/IGU-24 (Detalle Reporte)/Datos del Reporte",
  component: ReportData,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ReportData>;

export const Default: Story = {};
