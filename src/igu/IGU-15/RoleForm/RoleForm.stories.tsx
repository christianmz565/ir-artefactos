import type { Meta, StoryObj } from "@storybook/react";
import { MOCK_ROLES } from "@/mocks/roles";
import { RoleForm } from "./RoleForm";

const meta = {
  title: "Requisitos/Gestión de Roles/IGU-15 (Registrar Roles)/RoleForm",
  component: RoleForm,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof RoleForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (data) => console.log("Guardar rol", data),
    onCancel: () => console.log("Cancelar"),
  },
};

export const Edit: Story = {
  args: {
    initialData: MOCK_ROLES[0],
    onSubmit: (data) => console.log("Actualizar rol", data),
    onCancel: () => console.log("Cancelar"),
  },
};
