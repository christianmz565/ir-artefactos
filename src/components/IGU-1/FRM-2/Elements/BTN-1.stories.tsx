import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../../BTN";

const meta: Meta<typeof Button> = {
  title: "Requirements/IGU-1 Student Management/IGU-1-FRM-2 Edit Form/Elements/IGU-1-FRM-2-BTN-1 (Update)",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Docs: Story = {
  args: {
    children: "Update",
    variant: "primary",
  },
};

export const UpdateButton: Story = {
  name: "IGU-1-FRM-2-BTN-1 (Update)",
  args: {
    children: "Update",
    variant: "primary",
  },
};
