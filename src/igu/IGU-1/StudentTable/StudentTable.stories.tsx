import type { Meta, StoryObj } from "@storybook/react-vite";
import { StudentTable } from "./StudentTable";

const meta: Meta<typeof StudentTable> = {
  title: "Requisitos/Gestión de Estudiantes/IGU-1 (Lista)/Tabla",
  component: StudentTable,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof StudentTable>;

export const ConEstudiantes: Story = {
  name: "Con Estudiantes",
};
