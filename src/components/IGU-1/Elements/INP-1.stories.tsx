import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../../INP";

const meta: Meta<typeof Input> = {
  title: "Requirements/IGU-1 Student Management/Elements/IGU-1-INP-1 (Search)",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const SearchInput: Story = {
  name: "IGU-1-INP-1 (Search)",
  args: {
    placeholder: "Search by name...",
    id: "search-students",
  },
};
