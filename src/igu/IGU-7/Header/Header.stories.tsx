import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Requisitos/Gestión de Estudiantes/IGU-7 (Lista)/Encabezado",
  component: Header,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
