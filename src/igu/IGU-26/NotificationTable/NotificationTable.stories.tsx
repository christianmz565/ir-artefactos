import type { Meta, StoryObj } from "@storybook/react-vite";
import { NotificationTable } from "./NotificationTable";

const meta: Meta<typeof NotificationTable> = {
  title:
    "Requisitos/Notificaciones/IGU-26 (Consulta)/TAB-1 — Tabla de notificaciones",
  component: NotificationTable,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof NotificationTable>;

export const Default: Story = {};
