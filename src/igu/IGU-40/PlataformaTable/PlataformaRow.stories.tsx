import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_PLATAFORMAS } from "@/mocks/plataformas";
import { PlataformaRow } from "./PlataformaRow";

const meta: Meta<typeof PlataformaRow> = {
  title:
    "Requisitos/Gestión de Plataformas/IGU-40 (Consulta)/TAB-1 — Fila de plataforma",
  component: PlataformaRow,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof PlataformaRow>;

export const Default: Story = {
  args: {
    plataforma: MOCK_PLATAFORMAS[0],
  },
};

export const Inactiva: Story = {
  args: {
    plataforma: MOCK_PLATAFORMAS[2],
  },
};
