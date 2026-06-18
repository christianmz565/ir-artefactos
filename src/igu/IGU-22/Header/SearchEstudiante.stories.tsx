import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchEstudiante } from "./SearchEstudiante";

const meta: Meta<typeof SearchEstudiante> = {
  title:
    "Requisitos/Gestión de Asistencias/IGU-22 (Consulta)/SRCH-1 — Buscar estudiante",
  component: SearchEstudiante,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof SearchEstudiante>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};
