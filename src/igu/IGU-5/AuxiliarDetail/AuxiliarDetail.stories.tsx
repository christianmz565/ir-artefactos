import type { Meta, StoryObj } from "@storybook/react-vite";
import { MOCK_AUXILIARES } from "@/mocks/auxiliars";
import { AuxiliarDetail } from "./AuxiliarDetail";

const meta: Meta<typeof AuxiliarDetail> = {
  title: "Requisitos/Gestión de Auxiliares/IGU-5 (Detalle)/Detalle",
  component: AuxiliarDetail,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AuxiliarDetail>;

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
