import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./SEL";

const meta: Meta<typeof Select> = {
  title: "SEL",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    value: { control: "select" },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const COURSE_OPTIONS = [
  { value: "", label: "All Courses" },
  { value: "CS", label: "Computer Science" },
  { value: "Math", label: "Mathematics" },
  { value: "Physics", label: "Physics" },
];

export const SEL_1: Story = {
  name: "SEL-1",
  args: {
    options: COURSE_OPTIONS,
    id: "filter-course",
  },
};

export const SEL_2: Story = {
  name: "SEL-2",
  args: {
    label: "Course",
    options: COURSE_OPTIONS,
    value: "CS",
    id: "student-course",
  },
};
