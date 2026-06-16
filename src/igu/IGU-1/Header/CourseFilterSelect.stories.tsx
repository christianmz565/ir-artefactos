import type { Meta, StoryObj } from "@storybook/react-vite";
import { CourseFilterSelect } from "./CourseFilterSelect";

const meta: Meta<typeof CourseFilterSelect> = {
  title:
    "Requisitos/Gestión de Estudiantes/IGU-1 (Lista)/SELECT-1 — Filtrar por curso",
  component: CourseFilterSelect,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof CourseFilterSelect>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};

export const ConValor: Story = {
  args: {
    value: "CS",
    onChange: () => {},
  },
};
