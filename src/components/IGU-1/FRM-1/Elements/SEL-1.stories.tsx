import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "../../../SEL";

const meta: Meta<typeof Select> = {
  title: "Requirements/IGU-1 Student Management/IGU-1-FRM-1 Create Form/Elements/IGU-1-FRM-1-SEL-1 (Course)",
  component: Select,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

const COURSE_OPTIONS = [
  { value: "CS", label: "Computer Science" },
  { value: "Math", label: "Mathematics" },
  { value: "Physics", label: "Physics" },
];

export const Docs: Story = {
  args: {
    label: "Course",
    options: COURSE_OPTIONS,
    value: "CS",
    id: "student-course",
  },
};

export const CourseSelect: Story = {
  name: "IGU-1-FRM-1-SEL-1 (Course)",
  args: {
    label: "Course",
    options: COURSE_OPTIONS,
    value: "CS",
    id: "student-course",
  },
};
