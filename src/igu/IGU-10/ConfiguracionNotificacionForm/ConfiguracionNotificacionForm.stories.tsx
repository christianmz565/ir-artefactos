import type { Meta, StoryObj } from "@storybook/react";
import { MOCK_CONFIGURACION_NOTIFICACIONES } from "@/mocks/configuracionNotificaciones";
import { ConfiguracionNotificacionForm } from "./ConfiguracionNotificacionForm";

const meta = {
  title:
    "Requisitos/Gestión de Reportes/IGU-10 (Editar Configuración Notificación)/ConfiguracionNotificacionForm",
  component: ConfiguracionNotificacionForm,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof ConfiguracionNotificacionForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialData: MOCK_CONFIGURACION_NOTIFICACIONES[0],
    onSubmit: (data) => console.log("Submit config", data),
    onCancel: () => console.log("Cancelar edicion"),
  },
};
