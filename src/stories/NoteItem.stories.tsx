import type { Meta, StoryObj } from "@storybook/react";
import NoteItem from "../components/NotleItem/NoteItem";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import CustomTable from "../components/Table/Table";
import { mainTableHead } from "../assets/tableHeaders";

const meta = {
  title: "Components/NoteItem",
  component: NoteItem,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <CustomTable headers={mainTableHead}>
          <Story />
        </CustomTable>
      </Provider>
    ),
  ],
} satisfies Meta<typeof NoteItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItem = {
  name: "Shopping list",
  content: "Need to by: 3 eggs untill  20/08/2023",
  dates: ["20/08/2023"],
  id: 0,
  created: "03/08/2023",
};

export const Active: Story = {
  args: {
    ...defaultItem,
    category: 0,
    isActive: true,
  },
};

export const Archive: Story = {
  args: {
    ...defaultItem,
    category: 0,
    isActive: false,
  },
};
