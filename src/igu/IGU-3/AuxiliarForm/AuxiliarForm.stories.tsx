import type { Meta, StoryObj } from "@storybook/react-vite";
import { AuxiliarForm } from "./AuxiliarForm";

const meta: Meta<typeof AuxiliarForm> = {
  title: "Requisitos/Gestión de Auxiliares/IGU-3 (Edición)/Formulario",
  component: AuxiliarForm,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AuxiliarForm>;

export const Default: Story = {};
