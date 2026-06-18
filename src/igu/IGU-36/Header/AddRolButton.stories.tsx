import type { Meta, StoryObj } from "@storybook/react-vite";
import { AddRolButton } from "./AddRolButton";

const meta: Meta<typeof AddRolButton> = {
  title: "Requisitos/Gestión de Roles/IGU-36 (Consulta)/BTN — Agregar rol",
  component: AddRolButton,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AddRolButton>;

export const Default: Story = {};
