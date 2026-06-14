import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../BTN";

const meta: Meta<typeof Button> = {
  title: "Requirements/IGU-1 Student Management/Elements/IGU-1-BTN-1 (Add)",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const AddButton: Story = {
  name: "IGU-1-BTN-1 (Add)",
  args: {
    children: "+ Add Student",
    variant: "primary",
  },
};
