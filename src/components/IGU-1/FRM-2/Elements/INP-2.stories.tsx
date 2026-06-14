import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../../../INP";

const meta: Meta<typeof Input> = {
  title: "Requirements/IGU-1 Student Management/IGU-1-FRM-2 Edit Form/Elements/IGU-1-FRM-2-INP-2 (Email)",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Docs: Story = {
  args: {
    label: "Email",
    placeholder: "Enter email address",
    id: "student-email",
  },
};

export const EmailInput: Story = {
  name: "IGU-1-FRM-2-INP-2 (Email)",
  args: {
    label: "Email",
    placeholder: "Enter email address",
    id: "student-email",
  },
};
