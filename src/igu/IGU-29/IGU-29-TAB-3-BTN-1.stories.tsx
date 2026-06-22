import type { Meta, StoryObj } from "@storybook/react";
import { IGU_29_TAB_3_BTN_1 } from "./IGU-29-TAB-3-BTN-1";

const meta: Meta<typeof IGU_29_TAB_3_BTN_1> = {
  title: "Requisitos/Gestión de Reportes/IGU-29 (Consultar)/IGU-29-TAB-3-BTN-1",
  component: IGU_29_TAB_3_BTN_1,
};

export default meta;
type Story = StoryObj<typeof IGU_29_TAB_3_BTN_1>;

export const Default: Story = {
  args: {
    id: "1",
  },
};
