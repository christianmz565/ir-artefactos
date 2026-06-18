import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_NOTIFICACIONES } from "@/mocks/notificaciones";
import { NotificationTableBody } from "./NotificationTableBody";

const meta: Meta<typeof NotificationTableBody> = {
  title: "Requisitos/Notificaciones/IGU-26 (Consulta)/TAB-1 — Cuerpo de tabla",
  component: NotificationTableBody,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof NotificationTableBody>;

export const Default: Story = {
  args: {
    notifications: MOCK_NOTIFICACIONES,
  },
};

export const Vacio: Story = {
  args: {
    notifications: [],
  },
};
