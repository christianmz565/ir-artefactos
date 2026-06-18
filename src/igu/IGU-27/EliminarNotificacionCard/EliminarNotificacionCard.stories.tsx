import type { Meta, StoryObj } from "@storybook/react-vite";
import { EliminarNotificacionCard } from "./EliminarNotificacionCard";

const meta: Meta<typeof EliminarNotificacionCard> = {
  title:
    "Requisitos/Notificaciones/IGU-27 (Eliminar)/MDL-1 — Confirmar eliminación",
  component: EliminarNotificacionCard,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof EliminarNotificacionCard>;

export const Default: Story = {};
