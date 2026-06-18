import type { Meta, StoryObj } from "@storybook/react-vite";
import { EstadoFilter } from "./EstadoFilter";

const meta: Meta<typeof EstadoFilter> = {
  title:
    "Requisitos/Gestión de Asistencias/IGU-22 (Consulta)/SELECT-1 — Filtro de estado",
  component: EstadoFilter,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof EstadoFilter>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};
