import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Requisitos/Gestión de Roles/IGU-36 (Consulta)/Encabezado",
  component: Header,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
