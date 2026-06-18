import type { Meta, StoryObj } from "@storybook/react-vite";
import { PdfViewer } from "./PdfViewer";

const meta: Meta<typeof PdfViewer> = {
  title: "Requisitos/Reportes/IGU-24 (Detalle Reporte)/BTN-1 — Descargar",
  component: PdfViewer,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof PdfViewer>;

export const Default: Story = {};
