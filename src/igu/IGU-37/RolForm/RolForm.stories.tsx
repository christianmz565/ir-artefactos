import type { Meta, StoryObj } from "@storybook/react-vite";
import { RolForm } from "./RolForm";

const meta: Meta<typeof RolForm> = {
  title: "Requisitos/Gestión de Roles/IGU-37 (Edición)/Formulario",
  component: RolForm,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof RolForm>;

export const Default: Story = {};
