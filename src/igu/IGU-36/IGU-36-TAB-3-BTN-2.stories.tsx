import type { Meta, StoryObj } from "@storybook/react";
import { IGU_36_TAB_3_BTN_2 } from "./IGU-36-TAB-3-BTN-2";

const meta: Meta<typeof IGU_36_TAB_3_BTN_2> = {
  title: "Requisitos/Gestión de Roles/IGU-36 (Consultar)/IGU-36-TAB-3-BTN-2",
  component: IGU_36_TAB_3_BTN_2,
};

export default meta;
type Story = StoryObj<typeof IGU_36_TAB_3_BTN_2>;

export const Default: Story = {
  args: {
    id: "1",
  },
};
