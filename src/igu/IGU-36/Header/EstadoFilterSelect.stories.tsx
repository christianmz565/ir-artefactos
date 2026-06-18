import type { Meta, StoryObj } from "@storybook/react-vite";
import { EstadoFilterSelect } from "./EstadoFilterSelect";

const meta: Meta<typeof EstadoFilterSelect> = {
  title:
    "Requisitos/Gestión de Roles/IGU-36 (Consulta)/SELECT — Filtro de estado",
  component: EstadoFilterSelect,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof EstadoFilterSelect>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};
