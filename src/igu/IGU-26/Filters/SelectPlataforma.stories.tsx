import type { Meta, StoryObj } from "@storybook/react-vite";
import { SelectPlataforma } from "./SelectPlataforma";

const meta: Meta<typeof SelectPlataforma> = {
  title:
    "Requisitos/Notificaciones/IGU-26 (Consulta)/SELECT-1 — Filtro de plataforma",
  component: SelectPlataforma,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof SelectPlataforma>;

export const Default: Story = {};
