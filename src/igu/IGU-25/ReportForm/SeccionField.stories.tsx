import type { Meta, StoryObj } from "@storybook/react-vite";
import { SeccionField } from "./SeccionField";

const meta: Meta<typeof SeccionField> = {
  title: "Requisitos/Reportes/IGU-25 (Generador)/SELECT-1 — Sección",
  component: SeccionField,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof SeccionField>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};
