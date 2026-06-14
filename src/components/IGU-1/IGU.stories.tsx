import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "./IGU";

const meta: Meta<typeof View> = {
  title: "IGU-1",
  component: View,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof View>;

export const IGU_1: Story = {
  name: "IGU-1",
};
