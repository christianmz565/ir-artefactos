import type { Meta, StoryObj } from "@storybook/react-vite";
import { IGU_16_INP_1 } from "./IGU-16-INP-1";

const meta: Meta<typeof IGU_16_INP_1> = {
  title: "Requisitos/Gestión de Asistencias/IGU-16 (Registrar)/IGU-16-INP-1",
  component: IGU_16_INP_1,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof IGU_16_INP_1>;

export const Default: Story = {};
