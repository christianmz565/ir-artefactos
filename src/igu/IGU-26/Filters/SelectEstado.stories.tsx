import type { Meta, StoryObj } from "@storybook/react-vite";
import { SelectEstado } from "./SelectEstado";

const meta: Meta<typeof SelectEstado> = {
  title:
    "Requisitos/Notificaciones/IGU-26 (Consulta)/SELECT-1 — Filtro de estado",
  component: SelectEstado,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof SelectEstado>;

export const Default: Story = {};
