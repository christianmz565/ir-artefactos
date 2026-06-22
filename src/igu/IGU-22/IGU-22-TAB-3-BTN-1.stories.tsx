import type { Meta, StoryObj } from "@storybook/react";
import { IGU_22_TAB_3_BTN_1 } from "./IGU-22-TAB-3-BTN-1";

const meta: Meta<typeof IGU_22_TAB_3_BTN_1> = {
  title:
    "Requisitos/Gestión de Asistencias/IGU-22 (Consultar)/IGU-22-TAB-3-BTN-1",
  component: IGU_22_TAB_3_BTN_1,
};

export default meta;
type Story = StoryObj<typeof IGU_22_TAB_3_BTN_1>;

export const Default: Story = {
  args: {
    id: "1",
  },
};
