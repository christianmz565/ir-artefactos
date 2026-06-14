import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./BTN";

const meta: Meta<typeof Button> = {
  title: "BTN",
  component: Button,
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
type Story = StoryObj<typeof Button>;

export const BTN_1: Story = {
  name: "BTN-1",
  args: {
    children: "+ Add Student",
    variant: "primary",
  },
};

export const BTN_2: Story = {
  name: "BTN-2",
  args: {
    children: "Edit",
    variant: "secondary",
    size: "sm",
  },
};

export const BTN_3: Story = {
  name: "BTN-3",
  args: {
    children: "Delete",
    variant: "danger",
    size: "sm",
  },
};

export const BTN_4: Story = {
  name: "BTN-4",
  args: {
    children: "Save",
    variant: "primary",
  },
};

export const BTN_5: Story = {
  name: "BTN-5",
  args: {
    children: "Cancel",
    variant: "secondary",
  },
};
