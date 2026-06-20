import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_GUARDIANS } from "@/mocks/apoderados";
import { IGU_32_TAB_2 } from "./IGU-32-TAB-2";

const meta: Meta<typeof IGU_32_TAB_2> = {
  title: "Requisitos/Gestión de Apoderados/IGU-32 (Consultar)/IGU-32-TAB-2",
  component: IGU_32_TAB_2,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof IGU_32_TAB_2>;

export const Default: Story = { args: { guardians: MOCK_GUARDIANS } };
