import type { Meta, StoryObj } from "@storybook/react-vite";
import { Column } from "../../COL";

const meta: Meta<typeof Column> = {
  title: "Requirements/IGU-1 Student Management/Elements/IGU-1-COL-2 (Name Column)",
  component: Column,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Column>;

export const Docs: Story = {
  args: {
    header: "Name",
    items: ["Alice Johnson", "Bob Smith", "Carol White", "David Brown"],
  },
};

export const ColumnDefault: Story = {
  name: "IGU-1-COL-2 (Name)",
  args: {
    header: "Name",
    items: ["Alice Johnson", "Bob Smith", "Carol White", "David Brown"],
  },
};
