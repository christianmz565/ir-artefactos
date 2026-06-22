import type { Meta, StoryObj } from "@storybook/react";
import { IGU_36_TAB_3_BTN_1 } from "./IGU-36-TAB-3-BTN-1";

const meta: Meta<typeof IGU_36_TAB_3_BTN_1> = {
  title: "Requisitos/Gestión de Roles/IGU-36 (Consultar)/IGU-36-TAB-3-BTN-1",
  component: IGU_36_TAB_3_BTN_1,
};

export default meta;
type Story = StoryObj<typeof IGU_36_TAB_3_BTN_1>;

export const Default: Story = {
  args: {
    id: "1",
  },
};
