import type { Meta, StoryObj } from "@storybook/react";
import { StudentForm } from "./StudentForm";

const meta: Meta<typeof StudentForm> = {
  title: "Components/StudentForm",
  component: StudentForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StudentForm>;

export const AddNew: Story = {
  args: {
    isEdit: false,
    onSave: (data) => console.log("Save:", data),
    onCancel: () => console.log("Cancel"),
  },
};

export const EditExisting: Story = {
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
