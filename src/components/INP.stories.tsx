import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./INP";

const meta: Meta<typeof Input> = {
  title: "INP",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    label: { control: "text" },
    value: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const INP_1: Story = {
  name: "INP-1",
  args: {
    placeholder: "Search by name...",
    id: "search-students",
  },
};

export const INP_2: Story = {
  name: "INP-2",
  args: {
    label: "Name",
    placeholder: "Enter full name",
    id: "student-name",
  },
};

export const INP_3: Story = {
  name: "INP-3",
  args: {
    label: "Email",
    placeholder: "Enter email address",
    id: "student-email",
  },
};
