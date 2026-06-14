import type { Meta, StoryObj } from "@storybook/react-vite";
import { StudentForm } from "../FRM";

const meta: Meta<typeof StudentForm> = {
  title: "Requirements/IGU-1 Student Management/IGU-1-FRM-1 Create Form/Form",
  component: StudentForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StudentForm>;

export const Docs: Story = {
  args: {
    isEdit: false,
    onSave: (data) => console.log("Save:", data),
    onCancel: () => console.log("Cancel"),
  },
};

export const FormDefault: Story = {
  name: "Form (Create)",
  args: {
    isEdit: false,
    onSave: (data) => console.log("Save:", data),
    onCancel: () => console.log("Cancel"),
  },
};
