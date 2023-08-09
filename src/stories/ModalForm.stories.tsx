import type { Meta, StoryObj } from "@storybook/react";
import ModalForm from "../components/ModalForm/ModalForm";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const meta = {
  title: "Components/ModalForm",
  component: ModalForm,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
          <Story />
      </Provider>
    ),
  ],
} satisfies Meta<typeof ModalForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItem = {
  id: 0,
  name: "Shopping list",
  content: "Need to by: 3 eggs untill  20/08/2023",
  dates: ["20/08/2023"],
  created: "03/08/2023",
  category: 0,
  isActive: true,
};

export const CreateNote: Story = {
  args: {
    isCreate: true,
    show: true,
    onHide: () => {},
  },
};

export const EditNote: Story = {
  args: {
    isCreate: false,
    show: true,
    onHide: () => {},
    initialData: defaultItem,
  },
};
