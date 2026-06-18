import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_NOTIFICACIONES } from "@/mocks/notificaciones";
import { NotificationRow } from "./NotificationRow";

const meta: Meta<typeof NotificationRow> = {
  title:
    "Requisitos/Notificaciones/IGU-26 (Consulta)/TAB-1 — Fila de notificación",
  component: NotificationRow,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof NotificationRow>;

export const Default: Story = {
  args: {
    notificacion: MOCK_NOTIFICACIONES[0],
  },
};

export const Fallido: Story = {
  args: {
    notificacion: MOCK_NOTIFICACIONES[2],
  },
};
