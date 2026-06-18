import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchInput } from "./SearchInput";

const meta: Meta<typeof SearchInput> = {
  title:
    "Requisitos/Gestión de Plataformas/IGU-40 (Consulta)/SRCH-1 — Búsqueda",
  component: SearchInput,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};
