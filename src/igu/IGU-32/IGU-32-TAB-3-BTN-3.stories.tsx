import type { Meta, StoryObj } from "@storybook/react";
import { IGU_32_TAB_3_BTN_3 } from "./IGU-32-TAB-3-BTN-3";

const meta: Meta<typeof IGU_32_TAB_3_BTN_3> = {
  title:
    "Requisitos/Gestión de Apoderados/IGU-32 (Consultar)/IGU-32-TAB-3-BTN-3",
  component: IGU_32_TAB_3_BTN_3,
};

export default meta;
type Story = StoryObj<typeof IGU_32_TAB_3_BTN_3>;

export const Default: Story = {
  args: {
    id: "1",
    isActive: true,
  },
};
