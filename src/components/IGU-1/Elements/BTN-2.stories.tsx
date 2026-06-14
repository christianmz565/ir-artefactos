import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../BTN";

const meta: Meta<typeof Button> = {
  title: "Requirements/IGU-1 Student Management/Elements/IGU-1-BTN-2 (Edit)",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const EditButton: Story = {
  name: "IGU-1-BTN-2 (Edit)",
  args: {
    children: "Edit",
    variant: "secondary",
    size: "sm",
  },
};
