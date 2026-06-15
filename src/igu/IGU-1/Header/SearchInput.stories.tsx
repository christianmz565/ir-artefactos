import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchInput } from "./SearchInput";

const meta: Meta<typeof SearchInput> = {
  title: "Requisitos/Gestión de Estudiantes/IGU-1 (Lista)/Encabezado/Búsqueda",
  component: SearchInput,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};

export const ConValor: Story = {
  args: {
    value: "Alice",
    onChange: () => {},
  },
};
