import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormButtons } from "./FormButtons";

const meta: Meta<typeof FormButtons> = {
  title:
    "Requisitos/Gestión de Estudiantes/IGU-2 (Creación)/Formulario/Botones",
  component: FormButtons,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof FormButtons>;

export const Default: Story = {};

export const ConAcciones: Story = {
  args: {
    onSave: () => alert("Guardar clicked"),
    onCancel: () => alert("Cancelar clicked"),
  },
};
