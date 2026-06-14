import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../../BTN";

const meta: Meta<typeof Button> = {
  title: "Requirements/IGU-1 Student Management/IGU-1-FRM-1 Create Form/Elements/IGU-1-FRM-1-BTN-1 (Save)",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Docs: Story = {
  args: {
    children: "Save",
    variant: "primary",
  },
};

export const SaveButton: Story = {
  name: "IGU-1-FRM-1-BTN-1 (Save)",
  args: {
    children: "Save",
    variant: "primary",
  },
};
