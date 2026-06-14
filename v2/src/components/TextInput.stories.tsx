import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    label: { control: "text" },
    value: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    label: "Name",
    id: "text-input-default",
  },
};

export const WithValue: Story = {
  args: {
    label: "Email",
    value: "student@example.com",
    id: "text-input-with-value",
  },
};
