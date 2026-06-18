import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchNotificacion } from "./SearchNotificacion";

const meta: Meta<typeof SearchNotificacion> = {
  title:
    "Requisitos/Notificaciones/IGU-26 (Consulta)/SRCH-1 — Buscar notificación",
  component: SearchNotificacion,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof SearchNotificacion>;

export const Default: Story = {};
