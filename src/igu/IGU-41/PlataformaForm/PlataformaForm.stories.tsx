import type { Meta, StoryObj } from "@storybook/react-vite";
import { PlataformaForm } from "./PlataformaForm";

const meta: Meta<typeof PlataformaForm> = {
  title: "Requisitos/Gestión de Plataformas/IGU-41 (Edición)/Formulario",
  component: PlataformaForm,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof PlataformaForm>;

export const Default: Story = {};
