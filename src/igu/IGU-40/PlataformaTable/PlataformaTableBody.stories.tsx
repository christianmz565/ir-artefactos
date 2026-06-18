import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_PLATAFORMAS } from "@/mocks/plataformas";
import { PlataformaTableBody } from "./PlataformaTableBody";

const meta: Meta<typeof PlataformaTableBody> = {
  title:
    "Requisitos/Gestión de Plataformas/IGU-40 (Consulta)/TAB-1 — Cuerpo de tabla",
  component: PlataformaTableBody,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof PlataformaTableBody>;

export const ConDatos: Story = {
  args: {
    plataformas: MOCK_PLATAFORMAS,
  },
};

export const Vacio: Story = {
  args: {
    plataformas: [],
  },
};
