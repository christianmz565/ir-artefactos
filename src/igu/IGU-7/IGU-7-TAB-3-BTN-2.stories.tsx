import type { Meta, StoryObj } from "@storybook/react";
import { IGU_7_TAB_3_BTN_2 } from "./IGU-7-TAB-3-BTN-2";

const meta: Meta<typeof IGU_7_TAB_3_BTN_2> = {
  title:
    "Requisitos/Gestión de Estudiantes/IGU-7 (Consultar)/IGU-7-TAB-3-BTN-2",
  component: IGU_7_TAB_3_BTN_2,
};

export default meta;
type Story = StoryObj<typeof IGU_7_TAB_3_BTN_2>;

export const Default: Story = {
  args: {
    id: "1",
  },
};
