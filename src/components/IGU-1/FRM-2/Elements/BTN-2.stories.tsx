import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../../BTN";

const meta: Meta<typeof Button> = {
  title: "Requirements/IGU-1 Student Management/IGU-1-FRM-2 Edit Form/Elements/IGU-1-FRM-2-BTN-2 (Cancel)",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Docs: Story = {
  args: {
    children: "Cancel",
    variant: "secondary",
  },
};

export const CancelButton: Story = {
  name: "IGU-1-FRM-2-BTN-2 (Cancel)",
  args: {
    children: "Cancel",
    variant: "secondary",
  },
};
