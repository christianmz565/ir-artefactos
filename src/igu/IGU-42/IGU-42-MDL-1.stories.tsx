import type { Meta, StoryObj } from "@storybook/react-vite";
import { IGU_42_MDL_1 } from "./IGU-42-MDL-1";

const meta: Meta<typeof IGU_42_MDL_1> = {
  title: "Requisitos/Gestión de Plataformas/IGU-42 (Inactivar)/IGU-42-MDL-1",
  component: IGU_42_MDL_1,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof IGU_42_MDL_1>;

export const Default: Story = {};
