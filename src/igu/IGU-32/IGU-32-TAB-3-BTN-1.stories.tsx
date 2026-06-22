import type { Meta, StoryObj } from "@storybook/react";
import { IGU_32_TAB_3_BTN_1 } from "./IGU-32-TAB-3-BTN-1";

const meta: Meta<typeof IGU_32_TAB_3_BTN_1> = {
  title:
    "Requisitos/Gestión de Apoderados/IGU-32 (Consultar)/IGU-32-TAB-3-BTN-1",
  component: IGU_32_TAB_3_BTN_1,
};

export default meta;
type Story = StoryObj<typeof IGU_32_TAB_3_BTN_1>;

export const Default: Story = {
  args: {
    id: "1",
  },
};
