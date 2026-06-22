import type { Meta, StoryObj } from "@storybook/react";
import { IGU_15_TAB_3_BTN_2 } from "./IGU-15-TAB-3-BTN-2";

const meta: Meta<typeof IGU_15_TAB_3_BTN_2> = {
  title:
    "Requisitos/Gestión de Profesores/IGU-15 (Consultar)/IGU-15-TAB-3-BTN-2",
  component: IGU_15_TAB_3_BTN_2,
};

export default meta;
type Story = StoryObj<typeof IGU_15_TAB_3_BTN_2>;

export const Default: Story = {
  args: {
    id: "1",
  },
};
