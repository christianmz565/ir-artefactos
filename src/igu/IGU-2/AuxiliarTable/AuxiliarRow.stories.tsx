import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_AUXILIARES } from "@/mocks/auxiliars";
import { AuxiliarRow } from "./AuxiliarRow";

const meta: Meta<typeof AuxiliarRow> = {
  title:
    "Requisitos/Gestión de Auxiliares/IGU-2 (Lista)/TAB-1 — Fila de auxiliar",
  component: AuxiliarRow,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AuxiliarRow>;

export const Default: Story = {
  args: {
    auxiliar: MOCK_AUXILIARES[0],
  },
};

export const Inactivo: Story = {
  args: {
    auxiliar: MOCK_AUXILIARES[2],
  },
};
