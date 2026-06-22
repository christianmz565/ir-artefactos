import type { Meta, StoryObj } from "@storybook/react";
import { IGU_29_TAB_3_BTN_3 } from "./IGU-29-TAB-3-BTN-3";

const meta: Meta<typeof IGU_29_TAB_3_BTN_3> = {
  title: "Requisitos/Gestión de Reportes/IGU-29 (Consultar)/IGU-29-TAB-3-BTN-3",
  component: IGU_29_TAB_3_BTN_3,
};

export default meta;
type Story = StoryObj<typeof IGU_29_TAB_3_BTN_3>;

export const Default: Story = {
  args: {
    id: "1",
  },
};
