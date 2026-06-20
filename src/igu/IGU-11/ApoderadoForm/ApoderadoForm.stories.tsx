import type { Meta, StoryObj } from "@storybook/react";
import { MOCK_APODERADOS } from "@/mocks/apoderados";
import { ApoderadoForm } from "./ApoderadoForm";

const meta = {
  title:
    "Requisitos/Gestión de Apoderados/IGU-11 (Registrar Apoderado)/ApoderadoForm",
  component: ApoderadoForm,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof ApoderadoForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockEstudiantes = [
  { id: 1, nombre: "Juan Pérez" },
  { id: 2, nombre: "Ana Ruiz" },
  { id: 3, nombre: "Luis Gómez" },
  { id: 4, nombre: "Pedro Martínez" },
];

export const Default: Story = {
  args: {
    estudiantesDisponibles: mockEstudiantes,
    onSubmit: (data) => console.log("Guardar apoderado", data),
    onCancel: () => console.log("Cancelar"),
  },
};

export const Edit: Story = {
  args: {
    estudiantesDisponibles: mockEstudiantes,
    initialData: MOCK_APODERADOS[0],
    onSubmit: (data) => console.log("Actualizar apoderado", data),
    onCancel: () => console.log("Cancelar"),
  },
};
