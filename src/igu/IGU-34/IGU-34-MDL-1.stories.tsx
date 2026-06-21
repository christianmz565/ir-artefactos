import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_GUARDIANS } from "@/mocks/apoderados";
import { IGU_34_MDL_1 } from "./IGU-34-MDL-1";

const meta: Meta<typeof IGU_34_MDL_1> = {
  title: "Requisitos/Gestión de Apoderados/IGU-34 (Inactivar)/IGU-34-MDL-1",
  component: IGU_34_MDL_1,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof IGU_34_MDL_1>;

export const Default: Story = {
  args: { guardian: MOCK_GUARDIANS[0] },
};
