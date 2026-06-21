import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_REPORTES } from "@/mocks/reportes";
import { IGU_29_TAB_3 } from "./IGU-29-TAB-3";

const meta: Meta<typeof IGU_29_TAB_3> = {
  title: "Requisitos/Gestión de Reportes/IGU-29 (Consultar)/IGU-29-TAB-3",
  component: IGU_29_TAB_3,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof IGU_29_TAB_3>;

export const Default: Story = {
  args: { reporte: MOCK_REPORTES[0] },
};
