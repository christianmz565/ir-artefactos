import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_AUXILIARES } from "@/mocks/auxiliars";
import { IGU_2_TAB_2 } from "./IGU-2-TAB-2";

const meta: Meta<typeof IGU_2_TAB_2> = {
  title: "Requisitos/Gestión de Auxiliares/IGU-2 (Consultar)/IGU-2-TAB-2",
  component: IGU_2_TAB_2,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof IGU_2_TAB_2>;

export const Default: Story = { args: { auxiliares: MOCK_AUXILIARES } };
