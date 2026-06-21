import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_STUDENTS } from "@/mocks/students";
import { IGU_7_TAB_2 } from "./IGU-7-TAB-2";

const meta: Meta<typeof IGU_7_TAB_2> = {
  title: "Requisitos/Gestión de Estudiantes/IGU-7 (Consultar)/IGU-7-TAB-2",
  component: IGU_7_TAB_2,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof IGU_7_TAB_2>;

export const Default: Story = { args: { students: MOCK_STUDENTS } };
