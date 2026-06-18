import type { Meta, StoryObj } from "@storybook/react-vite";
import { SeccionFilter } from "./SeccionFilter";

const meta: Meta<typeof SeccionFilter> = {
  title:
    "Requisitos/Gestión de Asistencias/IGU-22 (Consulta)/SELECT-1 — Filtro de sección",
  component: SeccionFilter,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof SeccionFilter>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};
