import type { Meta, StoryObj } from "@storybook/react";
import idea from "../assets/img/idea.png";
import CategoryItem from "../components/CategoryItem/CategoryItem";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import CustomTable from "../components/Table/Table";
import { categoriesHead } from "../assets/tableHeaders";

const meta = {
  title: "Components/CategoryItem",
  component: CategoryItem,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <CustomTable headers={categoriesHead}>
          <Story />
        </CustomTable>
      </Provider>
    ),
  ],
} satisfies Meta<typeof CategoryItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IdeaItem: Story = {
  args: {
    id: 2,
    title: "Idea",
    icon: idea,
  },
};
