import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_ROLES } from "@/mocks/roles";
import { RolTableBody } from "./RolTableBody";

const meta: Meta<typeof RolTableBody> = {
  title:
    "Requisitos/Gestión de Roles/IGU-36 (Consulta)/TAB-1 — Cuerpo de tabla",
  component: RolTableBody,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof RolTableBody>;

export const Default: Story = {
  args: {
    roles: MOCK_ROLES,
  },
};

export const Vacia: Story = {
  args: {
    roles: [],
  },
};
