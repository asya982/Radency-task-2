import type { Meta, StoryObj } from '@storybook/react';
import Header from '../layout/Header/Header';


const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderComponent: Story = {};
