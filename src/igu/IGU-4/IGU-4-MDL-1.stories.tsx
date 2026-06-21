import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_AUXILIARES } from "@/mocks/auxiliars";
import { IGU_4_MDL_1 } from "./IGU-4-MDL-1";

const meta: Meta<typeof IGU_4_MDL_1> = {
  title: "Requisitos/Gestión de Auxiliares/IGU-4 (Inactivar)/IGU-4-MDL-1",
  component: IGU_4_MDL_1,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof IGU_4_MDL_1>;

export const Default: Story = {
  args: { auxiliar: MOCK_AUXILIARES[0] },
};
