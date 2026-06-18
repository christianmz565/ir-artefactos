import type { Meta, StoryObj } from "@storybook/react-vite";
import { UrlInput } from "./UrlInput";

const meta: Meta<typeof UrlInput> = {
  title:
    "Requisitos/Gestión de Plataformas/IGU-39 (Creación)/Formulario/CampoURL",
  component: UrlInput,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof UrlInput>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};

export const ConValor: Story = {
  args: {
    value: "https://graph.facebook.com/v17.0",
    onChange: () => {},
  },
};
