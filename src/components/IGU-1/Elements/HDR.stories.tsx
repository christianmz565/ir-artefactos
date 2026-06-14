import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "../HDR";

const meta: Meta<typeof Header> = {
  title: "Requisitos/Gestión de Estudiantes/Elementos/IGU-1-HDR (Encabezado)",
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
      onAddStudent={() => console.log("Agregar estudiante")}
    />
  );
}

export const HeaderElement: Story = {
  name: "IGU-1-HDR (Header)",
  render: () => <HeaderWrapper />,
};
