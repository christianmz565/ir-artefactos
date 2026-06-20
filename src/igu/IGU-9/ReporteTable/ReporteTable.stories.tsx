import type { Meta, StoryObj } from "@storybook/react";
import { MOCK_REPORTES } from "@/mocks/reportes";
import { ReporteTable } from "./ReporteTable";

const meta = {
  title: "Requisitos/Gestión de Reportes/IGU-9 (Listar Reportes)/ReporteTable",
  component: ReporteTable,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof ReporteTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    reportes: MOCK_REPORTES,
    onVerDetalle: (id) => console.log("Ver detalle reporte", id),
    onDescargar: (url) => console.log("Descargar reporte", url),
    onEliminar: (id) => console.log("Eliminar reporte", id),
  },
};

export const Empty: Story = {
  args: {
    reportes: [],
  },
};
