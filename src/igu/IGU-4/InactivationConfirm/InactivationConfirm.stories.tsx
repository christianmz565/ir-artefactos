import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_AUXILIARES } from "@/mocks/auxiliars";
import { InactivationConfirm } from "./InactivationConfirm";

const meta: Meta<typeof InactivationConfirm> = {
  title: "Requisitos/Gestión de Auxiliares/IGU-4 (Inactivación)/Confirmación",
  component: InactivationConfirm,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof InactivationConfirm>;

export const Default: Story = {
  args: {
    auxiliar: MOCK_AUXILIARES[0],
  },
};

export const ConAcciones: Story = {
  args: {
    auxiliar: MOCK_AUXILIARES[1],
    onConfirm: () => alert("Inactivación confirmada"),
    onCancel: () => alert("Cancelado"),
  },
};
