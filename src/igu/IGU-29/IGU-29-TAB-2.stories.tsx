import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_REPORTES } from "@/mocks/reportes";
import { IGU_29_TAB_2 } from "./IGU-29-TAB-2";

const meta: Meta<typeof IGU_29_TAB_2> = {
  title: "Requisitos/Gestión de Reportes/IGU-29 (Consultar)/IGU-29-TAB-2",
  component: IGU_29_TAB_2,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof IGU_29_TAB_2>;

export const Default: Story = { args: { reportes: MOCK_REPORTES } };
