import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActionButton } from "./ActionButton";

const meta: Meta<typeof ActionButton> = {
  title: "Components/ActionButton",
  component: ActionButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "success", "warning"],
    },
    children: { control: "text" },
    disabled: { control: "boolean" },
    size: { control: "select", options: ["sm", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Primary: Story = {
  args: {
    children: "Add Student",
    variant: "primary",
  },
};

export const Danger: Story = {
  args: {
    children: "Delete",
    variant: "danger",
  },
};

export const Small: Story = {
  args: {
    children: "Edit",
    variant: "secondary",
    size: "sm",
  },
};

export const Disabled: Story = {
  args: {
    children: "Submit",
    disabled: true,
  },
};
