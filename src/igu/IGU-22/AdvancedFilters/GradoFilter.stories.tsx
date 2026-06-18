import type { Meta, StoryObj } from "@storybook/react-vite";
import { GradoFilter } from "./GradoFilter";

const meta: Meta<typeof GradoFilter> = {
  title:
    "Requisitos/Gestión de Asistencias/IGU-22 (Consulta)/SELECT-1 — Filtro de grado",
  component: GradoFilter,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof GradoFilter>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};
