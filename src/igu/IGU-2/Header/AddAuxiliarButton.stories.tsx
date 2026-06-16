import type { Meta, StoryObj } from "@storybook/react-vite";
import { AddAuxiliarButton } from "./AddAuxiliarButton";

const meta: Meta<typeof AddAuxiliarButton> = {
  title:
    "Requisitos/Gestión de Auxiliares/IGU-2 (Lista)/BTN-1 — Agregar auxiliar",
  component: AddAuxiliarButton,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AddAuxiliarButton>;

export const Default: Story = {};
