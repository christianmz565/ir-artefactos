import type { Meta, StoryObj } from "@storybook/react-vite";
import { PermisosSelect } from "./PermisosSelect";

const meta: Meta<typeof PermisosSelect> = {
  title:
    "Requisitos/Gestión de Roles/IGU-37 (Edición)/Formulario/CampoPermisos",
  component: PermisosSelect,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof PermisosSelect>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};

export const ConValor: Story = {
  args: {
    value: "Gestionar usuarios, Gestionar roles",
    onChange: () => {},
  },
};
