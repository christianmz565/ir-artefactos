import type { Meta, StoryObj } from "@storybook/react";
import { MOCK_APODERADOS } from "@/mocks/apoderados";
import { InactivationConfirm } from "./InactivationConfirm";

const meta = {
  title:
    "Requisitos/Gestión de Apoderados/IGU-14 (Inactivar Apoderado)/InactivationConfirm",
  component: InactivationConfirm,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof InactivationConfirm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    apoderado: MOCK_APODERADOS[0],
    onConfirm: (id) => console.log("Confirmar", id),
    onCancel: () => console.log("Cancelar"),
  },
};
