import type { Meta, StoryObj } from "@storybook/react";
import { IGU_2_TAB_3_BTN_3 } from "./IGU-2-TAB-3-BTN-3";

const meta: Meta<typeof IGU_2_TAB_3_BTN_3> = {
  title: "Requisitos/Gestión de Auxiliares/IGU-2 (Consultar)/IGU-2-TAB-3-BTN-3",
  component: IGU_2_TAB_3_BTN_3,
};

export default meta;
type Story = StoryObj<typeof IGU_2_TAB_3_BTN_3>;

export const Default: Story = {
  args: {
    id: "1",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    id: "1",
    disabled: true,
  },
};
