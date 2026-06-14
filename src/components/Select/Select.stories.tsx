import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Componentes/Select",
  component: Select,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Select>;

const OPTIONS = [
  { value: "", label: "Seleccione..." },
  { value: "cs", label: "Ciencias de la Computación" },
  { value: "math", label: "Matemáticas" },
  { value: "physics", label: "Física" },
];

export const Default: Story = {
  args: { options: OPTIONS },
};

export const WithLabel: Story = {
  name: "Con etiqueta",
  args: { label: "Curso", options: OPTIONS },
};

export const WithValue: Story = {
  name: "Con valor seleccionado",
  args: { label: "Curso", options: OPTIONS, value: "cs" },
};
