import type { Meta, StoryObj } from "@storybook/react-vite";
import { BackPageButton } from "./BackPageButton";

const meta: Meta<typeof BackPageButton> = {
  title: "Requisitos/Gestión de Asistencias/IGU-28 (Detalle)/BTN-1 - Regresar",
  component: BackPageButton,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof BackPageButton>;

export const Default: Story = {};
