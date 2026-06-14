import type { Meta, StoryObj } from "@storybook/react-vite";
import { Column } from "../../COL";

const meta: Meta<typeof Column> = {
  title: "Requirements/IGU-1 Student Management/Elements/IGU-1-COL-3 (Email Column)",
  component: Column,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Column>;

export const Docs: Story = {
  args: {
    header: "Email",
    items: ["alice@example.com", "bob@example.com", "carol@example.com", "david@example.com"],
  },
};

export const ColumnDefault: Story = {
  name: "IGU-1-COL-3 (Email)",
  args: {
    header: "Email",
    items: ["alice@example.com", "bob@example.com", "carol@example.com", "david@example.com"],
  },
};
