import type { Meta, StoryObj } from "@storybook/react-vite";
import { TipoFilter } from "./TipoFilter";

const meta: Meta<typeof TipoFilter> = {
  title:
    "Requisitos/Gestión de Asistencias/IGU-22 (Consulta)/SELECT-1 — Filtro de tipo",
  component: TipoFilter,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof TipoFilter>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};
