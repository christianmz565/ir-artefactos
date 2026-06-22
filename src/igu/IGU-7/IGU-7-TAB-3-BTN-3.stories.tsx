import type { Meta, StoryObj } from "@storybook/react";
import { IGU_7_TAB_3_BTN_3 } from "./IGU-7-TAB-3-BTN-3";

const meta: Meta<typeof IGU_7_TAB_3_BTN_3> = {
  title:
    "Requisitos/Gestión de Estudiantes/IGU-7 (Consultar)/IGU-7-TAB-3-BTN-3",
  component: IGU_7_TAB_3_BTN_3,
};

export default meta;
type Story = StoryObj<typeof IGU_7_TAB_3_BTN_3>;

export const Default: Story = {
  args: {
    id: "1",
  },
};
