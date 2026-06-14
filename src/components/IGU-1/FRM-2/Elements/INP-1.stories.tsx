import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../../../INP";

const meta: Meta<typeof Input> = {
  title: "Requirements/IGU-1 Student Management/IGU-1-FRM-2 Edit Form/Elements/IGU-1-FRM-2-INP-1 (Name)",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Docs: Story = {
  args: {
    label: "Name",
    placeholder: "Enter full name",
    id: "student-name",
  },
};

export const NameInput: Story = {
  name: "IGU-1-FRM-2-INP-1 (Name)",
  args: {
    label: "Name",
    placeholder: "Enter full name",
    id: "student-name",
  },
};
