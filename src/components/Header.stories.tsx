import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

function HeaderWrapper() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCourse, setFilterCourse] = useState("");

  return (
    <Header
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      filterCourse={filterCourse}
      onFilterChange={setFilterCourse}
      onAddStudent={() => console.log("Add student")}
    />
  );
}

export const Default: Story = {
  render: () => <HeaderWrapper />,
};
