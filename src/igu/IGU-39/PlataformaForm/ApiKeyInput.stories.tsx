import type { Meta, StoryObj } from "@storybook/react-vite";
import { ApiKeyInput } from "./ApiKeyInput";

const meta: Meta<typeof ApiKeyInput> = {
  title:
    "Requisitos/Gestión de Plataformas/IGU-39 (Creación)/Formulario/CampoAPIKey",
  component: ApiKeyInput,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ApiKeyInput>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};

export const ConValor: Story = {
  args: {
    value: "whatsapp_api_key_xxxx",
    onChange: () => {},
  },
};
