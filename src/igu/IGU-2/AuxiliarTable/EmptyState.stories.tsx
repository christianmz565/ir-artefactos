import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmptyState } from "./EmptyState";

const meta: Meta<typeof EmptyState> = {
  title: "Requisitos/Gestión de Auxiliares/IGU-2 (Lista)/ALT-1 — Estado vacío",
  component: EmptyState,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {};
