import type { Meta, StoryObj } from "@storybook/react-vite";
import { StudentForm } from "../FRM";

const meta: Meta<typeof StudentForm> = {
  title: "Requirements/IGU-1 Student Management/IGU-1-FRM-2 Edit Form/Form",
  component: StudentForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StudentForm>;

export const Docs: Story = {
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

export const FormDefault: Story = {
  name: "Form (Edit)",
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
