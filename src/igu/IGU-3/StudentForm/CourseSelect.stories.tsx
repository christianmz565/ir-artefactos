import type { Meta, StoryObj } from "@storybook/react-vite";
import { CourseSelect } from "./CourseSelect";

const meta: Meta<typeof CourseSelect> = {
  title:
    "Requisitos/Gestión de Estudiantes/IGU-3 (Edición)/Formulario/CampoCurso",
  component: CourseSelect,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof CourseSelect>;

export const Default: Story = {
  args: {
    value: "CS",
    onChange: () => {},
  },
};

export const SinValor: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};
