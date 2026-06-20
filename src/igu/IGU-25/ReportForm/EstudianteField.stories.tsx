import type { Meta, StoryObj } from "@storybook/react-vite";
import { EstudianteField } from "./EstudianteField";

const meta: Meta<typeof EstudianteField> = {
  title: "Requisitos/Reportes/IGU-25 (Generador)/SRCH-1 — Estudiante",
  component: EstudianteField,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof EstudianteField>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};
