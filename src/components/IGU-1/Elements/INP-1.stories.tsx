import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../../INP";

const meta: Meta<typeof Input> = {
  title: "Requisitos/Gestión de Estudiantes/Elementos/IGU-1-INP-1 (Búsqueda)",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const SearchInput: Story = {
  name: "IGU-1-INP-1 (Search)",
  args: {
    placeholder: "Buscar por nombre...",
    id: "search-students",
  },
};
