import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "../components/Navbar/Navbar";
import { reactRouterParameters } from "storybook-addon-react-router-v6";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: "/" },
    }),
  },
};

export const Archive: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: "/archived" },
    }),
  },
};
