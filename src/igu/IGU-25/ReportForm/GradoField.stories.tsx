import type { Meta, StoryObj } from "@storybook/react-vite";
import { GradoField } from "./GradoField";

const meta: Meta<typeof GradoField> = {
  title: "Requisitos/Reportes/IGU-25 (Generador)/SELECT-1 — Grado",
  component: GradoField,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof GradoField>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};
