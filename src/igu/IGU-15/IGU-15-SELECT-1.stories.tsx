import type { Meta, StoryObj } from "@storybook/react-vite";
import { IGU_15_SELECT_1 } from "./IGU-15-SELECT-1";

const meta: Meta<typeof IGU_15_SELECT_1> = {
  title: "Requisitos/Gestión de Profesores/IGU-15 (Consultar)/IGU-15-SELECT-1",
  component: IGU_15_SELECT_1,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof IGU_15_SELECT_1>;

export const Default: Story = {};
