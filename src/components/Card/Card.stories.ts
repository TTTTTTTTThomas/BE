import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    children:
      'This is the card content. It can contain any React components or text.',
  },
};

export const WithoutTitle: Story = {
  args: {
    children: 'This card has no title, just content.',
  },
};

export const LongContent: Story = {
  args: {
    title: 'Card with Long Content',
    children:
      'This is a card with a longer content to demonstrate how the card handles more text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};
