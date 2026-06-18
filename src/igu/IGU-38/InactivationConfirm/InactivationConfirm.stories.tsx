import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_ROLES } from "@/mocks/roles";
import { InactivationConfirm } from "./InactivationConfirm";

const meta: Meta<typeof InactivationConfirm> = {
  title: "Requisitos/Gestión de Roles/IGU-38 (Inactivación)/Confirmación",
  component: InactivationConfirm,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof InactivationConfirm>;

export const Default: Story = {
  args: {
    rol: MOCK_ROLES[0],
  },
};

export const ConAcciones: Story = {
  args: {
    rol: MOCK_ROLES[1],
    onConfirm: () => alert("Inactivación confirmada"),
    onCancel: () => alert("Cancelado"),
  },
};
