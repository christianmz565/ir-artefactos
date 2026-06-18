import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_PLATAFORMAS } from "@/mocks/plataformas";
import { InactivationConfirm } from "./InactivationConfirm";

const meta: Meta<typeof InactivationConfirm> = {
  title: "Requisitos/Gestión de Plataformas/IGU-42 (Inactivación)/Confirmación",
  component: InactivationConfirm,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof InactivationConfirm>;

export const Default: Story = {
  args: {
    plataforma: MOCK_PLATAFORMAS[0],
  },
};

export const ConAcciones: Story = {
  args: {
    plataforma: MOCK_PLATAFORMAS[1],
    onConfirm: () => alert("Inactivación confirmada"),
    onCancel: () => alert("Cancelado"),
  },
};
