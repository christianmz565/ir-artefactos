import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_ROLES } from "@/mocks/roles";
import { RolRow } from "./RolRow";

const meta: Meta<typeof RolRow> = {
  title: "Requisitos/Gestión de Roles/IGU-36 (Consulta)/TAB-1 — Fila de rol",
  component: RolRow,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof RolRow>;

export const Default: Story = {
  args: {
    rol: MOCK_ROLES[0],
  },
};

export const Inactivo: Story = {
  args: {
    rol: MOCK_ROLES[3],
  },
};
