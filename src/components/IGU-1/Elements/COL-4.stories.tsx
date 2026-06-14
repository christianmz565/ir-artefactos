import type { Meta, StoryObj } from "@storybook/react-vite";
import { Column } from "../../COL";

const meta: Meta<typeof Column> = {
  title: "Requisitos/Gestión de Estudiantes/Elementos/IGU-1-COL-4 (Columna Curso)",
  component: Column,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Column>;

export const Docs: Story = {
  args: {
    header: "Curso",
    items: ["CS", "Math", "Physics", "CS"],
  },
};

export const ColumnDefault: Story = {
  name: "IGU-1-COL-4 (Course)",
  args: {
    header: "Curso",
    items: ["CS", "Math", "Physics", "CS"],
  },
};
