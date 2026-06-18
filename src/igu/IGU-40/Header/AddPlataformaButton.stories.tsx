import type { Meta, StoryObj } from "@storybook/react-vite";
import { AddPlataformaButton } from "./AddPlataformaButton";

const meta: Meta<typeof AddPlataformaButton> = {
  title:
    "Requisitos/Gestión de Plataformas/IGU-40 (Consulta)/BTN-1 — Agregar plataforma",
  component: AddPlataformaButton,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AddPlataformaButton>;

export const Default: Story = {};
