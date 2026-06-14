import type { Meta, StoryObj } from "@storybook/react-vite";
import { SelectInput } from "./SelectInput";

const meta: Meta<typeof SelectInput> = {
  title: "Components/SelectInput",
  component: SelectInput,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    value: { control: "select" },
  },
};

export default meta;
type Story = StoryObj<typeof SelectInput>;

const COURSE_OPTIONS = [
  { value: "", label: "All Courses" },
  { value: "CS", label: "Computer Science" },
  { value: "Math", label: "Mathematics" },
  { value: "Physics", label: "Physics" },
];

export const Default: Story = {
  args: {
    label: "Course",
    options: COURSE_OPTIONS,
    id: "select-default",
  },
};

export const PreSelected: Story = {
  args: {
    label: "Course",
    options: COURSE_OPTIONS,
    value: "CS",
    id: "select-preselected",
  },
};
