import type { Meta, StoryObj } from "@storybook/react";
import { IGU_40_TAB_3_BTN_3 } from "./IGU-40-TAB-3-BTN-3";

const meta: Meta<typeof IGU_40_TAB_3_BTN_3> = {
  title:
    "Requisitos/Gestión de Plataformas/IGU-40 (Consultar)/IGU-40-TAB-3-BTN-3",
  component: IGU_40_TAB_3_BTN_3,
};

export default meta;
type Story = StoryObj<typeof IGU_40_TAB_3_BTN_3>;

export const Default: Story = {
  args: {
    id: "1",
  },
};
