import type { Meta, StoryObj } from "@storybook/react-vite";
import { Column } from "./Column";

const meta: Meta<typeof Column> = {
  title: "Componentes/Column",
  component: Column,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Column>;

export const Default: Story = {
  args: {
    header: "ID",
    items: ["1", "2", "3", "4"],
  },
};

export const Names: Story = {
  name: "Nombres",
  args: {
    header: "Nombre",
    items: ["Alice", "Bob", "Carol", "David"],
  },
};
