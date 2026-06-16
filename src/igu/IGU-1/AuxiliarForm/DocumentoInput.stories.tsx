import type { Meta, StoryObj } from "@storybook/react-vite";
import { DocumentoInput } from "./DocumentoInput";

const meta: Meta<typeof DocumentoInput> = {
  title:
    "Requisitos/Gestión de Auxiliares/IGU-1 (Creación)/Formulario/CampoDocumento",
  component: DocumentoInput,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof DocumentoInput>;

export const Default: Story = {
  args: {
    tipo: "DNI",
    numero: "",
    onTipoChange: () => {},
    onNumeroChange: () => {},
  },
};

export const ConValor: Story = {
  args: {
    tipo: "DNI",
    numero: "45678901",
    onTipoChange: () => {},
    onNumeroChange: () => {},
  },
};
