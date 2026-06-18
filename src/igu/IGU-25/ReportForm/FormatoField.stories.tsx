import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormatoField } from "./FormatoField";

const meta: Meta<typeof FormatoField> = {
  title: "Requisitos/Reportes/IGU-25 (Generador)/SELECT-1 — Formato",
  component: FormatoField,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof FormatoField>;

export const Default: Story = {
  args: {
    value: "PDF",
    onChange: () => {},
  },
};
