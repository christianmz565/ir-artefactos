import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_STUDENTS } from "@/mocks/students";
import { IGU_7_TAB_3 } from "./IGU-7-TAB-3";

const meta: Meta<typeof IGU_7_TAB_3> = {
  title: "Requisitos/Gestión de Estudiantes/IGU-7 (Consultar)/IGU-7-TAB-3",
  component: IGU_7_TAB_3,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof IGU_7_TAB_3>;

export const Default: Story = {
  args: { student: MOCK_STUDENTS[0] },
};
