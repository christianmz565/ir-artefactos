import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_GUARDIANS } from "@/mocks/apoderados";
import { IGU_32_TAB_3 } from "./IGU-32-TAB-3";

const meta: Meta<typeof IGU_32_TAB_3> = {
  title: "Requisitos/Gestión de Apoderados/IGU-32 (Consultar)/IGU-32-TAB-3",
  component: IGU_32_TAB_3,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof IGU_32_TAB_3>;

export const Default: Story = {
  args: { guardian: MOCK_GUARDIANS[0] },
};
