import type { Meta, StoryObj } from "@storybook/react-vite";
import { DownloadPdfButton } from "./DownloadPdfButton";

const meta: Meta<typeof DownloadPdfButton> = {
  title: "Requisitos/Reportes/IGU-24 (Detalle Reporte)/BTN-1 — Descargar PDF",
  component: DownloadPdfButton,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof DownloadPdfButton>;

export const Default: Story = {};
