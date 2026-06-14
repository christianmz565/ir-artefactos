import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./HDR";

const meta: Meta<typeof Header> = {
  title: "IGU-1/HDR",
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

export const IGU_1_HDR: Story = {
  name: "IGU-1-HDR",
  render: () => <HeaderWrapper />,
};
