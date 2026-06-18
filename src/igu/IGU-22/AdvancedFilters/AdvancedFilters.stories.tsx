import type { Meta, StoryObj } from "@storybook/react-vite";
import { AdvancedFilters } from "./AdvancedFilters";

const meta: Meta<typeof AdvancedFilters> = {
  title:
    "Requisitos/Gestión de Asistencias/IGU-22 (Consulta)/Filtros avanzados",
  component: AdvancedFilters,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AdvancedFilters>;

export const Default: Story = {};
