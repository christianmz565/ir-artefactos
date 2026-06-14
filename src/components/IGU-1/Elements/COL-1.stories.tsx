import type { Meta, StoryObj } from "@storybook/react-vite";
import { Column } from "../../COL";

const meta: Meta<typeof Column> = {
  title: "Requirements/IGU-1 Student Management/Elements/IGU-1-COL-1 (ID Column)",
  component: Column,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Column>;

export const Docs: Story = {
  args: {
    header: "ID",
    items: ["1", "2", "3", "4"],
  },
};

export const ColumnDefault: Story = {
  name: "IGU-1-COL-1 (ID)",
  args: {
    header: "ID",
    items: ["1", "2", "3", "4"],
  },
};
