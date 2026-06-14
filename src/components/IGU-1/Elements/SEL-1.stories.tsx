import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "../../SEL";

const meta: Meta<typeof Select> = {
  title: "Requirements/IGU-1 Student Management/Elements/IGU-1-SEL-1 (Course Filter)",
  component: Select,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

const FILTER_OPTIONS = [
  { value: "", label: "All Courses" },
  { value: "CS", label: "Computer Science" },
  { value: "Math", label: "Mathematics" },
  { value: "Physics", label: "Physics" },
];

export const CourseFilter: Story = {
  name: "IGU-1-SEL-1 (Course Filter)",
  args: {
    options: FILTER_OPTIONS,
    id: "filter-course",
  },
};
