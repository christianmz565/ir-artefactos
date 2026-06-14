import type { Meta, StoryObj } from "@storybook/react-vite";
import { Column } from "../../COL";

const meta: Meta<typeof Column> = {
  title: "Requirements/IGU-1 Student Management/Elements/IGU-1-COL-4 (Course Column)",
  component: Column,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Column>;

export const Docs: Story = {
  args: {
    header: "Course",
    items: ["CS", "Math", "Physics", "CS"],
  },
};

export const ColumnDefault: Story = {
  name: "IGU-1-COL-4 (Course)",
  args: {
    header: "Course",
    items: ["CS", "Math", "Physics", "CS"],
  },
};
