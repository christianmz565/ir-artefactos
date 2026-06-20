import type { Meta, StoryObj } from "@storybook/react";
import { MOCK_APODERADOS } from "@/mocks/apoderados";
import { ApoderadoTable } from "./ApoderadoTable";

const meta = {
  title:
    "Requisitos/Gestión de Apoderados/IGU-12 (Consultar Apoderados)/ApoderadoTable",
  component: ApoderadoTable,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof ApoderadoTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    apoderados: MOCK_APODERADOS,
    onVerDetalle: (id) => console.log("Ver detalle apoderado", id),
    onEditar: (id) => console.log("Editar apoderado", id),
    onEliminar: (id) => console.log("Eliminar/Inactivar apoderado", id),
  },
};

export const Empty: Story = {
  args: {
    apoderados: [],
  },
};
