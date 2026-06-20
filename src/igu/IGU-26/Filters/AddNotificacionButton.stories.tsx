import type { Meta, StoryObj } from "@storybook/react-vite";
import { AddNotificacionButton } from "./AddNotificacionButton";

const meta: Meta<typeof AddNotificacionButton> = {
  title:
    "Requisitos/Notificaciones/IGU-26 (Consulta)/BTN-1 — Agregar notificación",
  component: AddNotificacionButton,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AddNotificacionButton>;

export const Default: Story = {};
