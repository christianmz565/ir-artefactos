import type { Meta, StoryObj } from "@storybook/react-vite";
import { StudentForm } from "./FRM";

const meta: Meta<typeof StudentForm> = {
  title: "IGU-1/FRM",
  component: StudentForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StudentForm>;

export const IGU_1_FRM_Add: Story = {
  name: "IGU-1-FRM (Add)",
  args: {
    isEdit: false,
    onSave: (data) => console.log("Save:", data),
    onCancel: () => console.log("Cancel"),
  },
};

export const IGU_1_FRM_Edit: Story = {
  name: "IGU-1-FRM (Edit)",
  args: {
    isEdit: true,
    initialData: {
      name: "Alice Johnson",
      email: "alice@example.com",
      course: "CS",
    },
    onSave: (data) => console.log("Update:", data),
    onCancel: () => console.log("Cancel"),
  },
};
