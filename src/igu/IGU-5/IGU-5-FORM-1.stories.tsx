import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_AUXILIARES } from "@/mocks/auxiliars";
import { IGU_5_FORM_1 } from "./IGU-5-FORM-1";

const meta: Meta<typeof IGU_5_FORM_1> = {
  title: "Requisitos/Gestión de Auxiliares/IGU-5 (Detalle)/IGU-5-FORM-1",
  component: IGU_5_FORM_1,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof IGU_5_FORM_1>;

export const Default: Story = {
  args: { auxiliar: MOCK_AUXILIARES[0] },
};
