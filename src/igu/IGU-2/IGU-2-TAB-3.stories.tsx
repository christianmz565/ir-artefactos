import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_AUXILIARES } from "@/mocks/auxiliars";
import { IGU_2_TAB_3 } from "./IGU-2-TAB-3";

const meta: Meta<typeof IGU_2_TAB_3> = {
  title: "Requisitos/Gestión de Auxiliares/IGU-2 (Consultar)/IGU-2-TAB-3",
  component: IGU_2_TAB_3,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof IGU_2_TAB_3>;

export const Default: Story = {
  args: { auxiliar: MOCK_AUXILIARES[0] },
};
