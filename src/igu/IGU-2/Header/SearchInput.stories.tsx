import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchInput } from "./SearchInput";

const meta: Meta<typeof SearchInput> = {
  title: "Requisitos/Gestión de Auxiliares/IGU-2 (Lista)/SRCH-1 — Búsqueda",
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
