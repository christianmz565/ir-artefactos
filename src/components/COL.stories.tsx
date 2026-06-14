import type { Meta, StoryObj } from "@storybook/react-vite";
import { Column } from "./COL";

const meta: Meta<typeof Column> = {
  title: "COL",
  component: Column,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Column>;

export const COL_1: Story = {
  name: "COL-1",
  args: {
    header: "ID",
    items: ["1", "2", "3", "4"],
  },
};

export const COL_2: Story = {
  name: "COL-2",
  args: {
    header: "Name",
    items: ["Alice Johnson", "Bob Smith", "Carol White", "David Brown"],
  },
};

export const COL_3: Story = {
  name: "COL-3",
  args: {
    header: "Email",
    items: ["alice@example.com", "bob@example.com", "carol@example.com", "david@example.com"],
  },
};

export const COL_4: Story = {
  name: "COL-4",
  args: {
    header: "Course",
    items: ["CS", "Math", "Physics", "CS"],
  },
};
