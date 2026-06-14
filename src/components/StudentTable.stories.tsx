import type { Meta, StoryObj } from "@storybook/react-vite";
import { StudentTable } from "./StudentTable";

const meta: Meta<typeof StudentTable> = {
  title: "Components/StudentTable",
  component: StudentTable,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StudentTable>;

const SAMPLE_STUDENTS = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", course: "CS" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", course: "Math" },
  { id: 3, name: "Carol White", email: "carol@example.com", course: "Physics" },
  { id: 4, name: "David Brown", email: "david@example.com", course: "CS" },
];

export const Default: Story = {
  args: {
    students: SAMPLE_STUDENTS,
    onEdit: (s) => console.log("Edit:", s),
    onDelete: (id) => console.log("Delete:", id),
  },
};

export const Empty: Story = {
  args: {
    students: [],
    onEdit: () => {},
    onDelete: () => {},
  },
};
