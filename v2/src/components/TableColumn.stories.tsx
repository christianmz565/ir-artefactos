import type { Meta, StoryObj } from "@storybook/react";
import { TableColumn } from "./TableColumn";

const meta: Meta<typeof TableColumn> = {
  title: "Components/TableColumn",
  component: TableColumn,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TableColumn>;

export const IDColumn: Story = {
  args: {
    header: "ID",
    items: ["1", "2", "3", "4"],
  },
};

export const NameColumn: Story = {
  args: {
    header: "Name",
    items: ["Alice Johnson", "Bob Smith", "Carol White", "David Brown"],
  },
};

export const CourseColumn: Story = {
  args: {
    header: "Course",
    items: ["CS", "Math", "Physics", "CS"],
  },
};
