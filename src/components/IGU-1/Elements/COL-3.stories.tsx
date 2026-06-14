import type { Meta, StoryObj } from "@storybook/react-vite";
import { Column } from "../../COL";

const meta: Meta<typeof Column> = {
  title: "Requisitos/Gestión de Estudiantes/Elementos/IGU-1-COL-3 (Columna Correo)",
  component: Column,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Column>;

export const Docs: Story = {
  args: {
    header: "Correo electrónico",
    items: ["alice@example.com", "bob@example.com", "carol@example.com", "david@example.com"],
  },
};

export const ColumnDefault: Story = {
  name: "IGU-1-COL-3 (Email)",
  args: {
    header: "Correo electrónico",
    items: ["alice@example.com", "bob@example.com", "carol@example.com", "david@example.com"],
  },
};
