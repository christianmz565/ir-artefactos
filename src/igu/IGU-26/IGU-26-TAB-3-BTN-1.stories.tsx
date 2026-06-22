import type { Meta, StoryObj } from "@storybook/react";
import { IGU_26_TAB_3_BTN_1 } from "./IGU-26-TAB-3-BTN-1";

const meta: Meta<typeof IGU_26_TAB_3_BTN_1> = {
  title:
    "Requisitos/Historial de Notificaciones/IGU-26 (Consultar)/IGU-26-TAB-3-BTN-1",
  component: IGU_26_TAB_3_BTN_1,
};

export default meta;
type Story = StoryObj<typeof IGU_26_TAB_3_BTN_1>;

export const Default: Story = {
  args: {
    id: "1",
  },
};
