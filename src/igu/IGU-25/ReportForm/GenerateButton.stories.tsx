import type { Meta, StoryObj } from "@storybook/react-vite";
import { GenerateButton } from "./GenerateButton";

const meta: Meta<typeof GenerateButton> = {
  title: "Requisitos/Reportes/IGU-25 (Generador)/BTN-1 — Generar reporte",
  component: GenerateButton,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof GenerateButton>;

export const Default: Story = {
  args: {
    loading: false,
    onClick: () => {},
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    onClick: () => {},
  },
};
