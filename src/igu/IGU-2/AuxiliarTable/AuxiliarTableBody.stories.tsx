import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_AUXILIARES } from "@/mocks/auxiliars";
import { AuxiliarTableBody } from "./AuxiliarTableBody";

const meta: Meta<typeof AuxiliarTableBody> = {
  title:
    "Requisitos/Gestión de Auxiliares/IGU-2 (Lista)/TAB-1 — Cuerpo de tabla",
  component: AuxiliarTableBody,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AuxiliarTableBody>;

export const ConDatos: Story = {
  args: {
    auxiliares: MOCK_AUXILIARES,
  },
};

export const Vacio: Story = {
  args: {
    auxiliares: [],
  },
};
