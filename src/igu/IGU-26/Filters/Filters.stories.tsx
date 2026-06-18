import type { Meta, StoryObj } from "@storybook/react-vite";
import { Filters } from "./Filters";

const meta: Meta<typeof Filters> = {
  title: "Requisitos/Notificaciones/IGU-26 (Consulta)/Filtros",
  component: Filters,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Filters>;

export const Default: Story = {};
