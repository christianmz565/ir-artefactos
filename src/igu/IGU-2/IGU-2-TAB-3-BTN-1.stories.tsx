import type { Meta, StoryObj } from "@storybook/react";
import { IGU_2_TAB_3_BTN_1 } from "./IGU-2-TAB-3-BTN-1";

const meta: Meta<typeof IGU_2_TAB_3_BTN_1> = {
  title: "Requisitos/Gestión de Auxiliares/IGU-2 (Consultar)/IGU-2-TAB-3-BTN-1",
  component: IGU_2_TAB_3_BTN_1,
};

export default meta;
type Story = StoryObj<typeof IGU_2_TAB_3_BTN_1>;

export const Default: Story = {
  args: {
    id: "1",
  },
};
