import type { Meta, StoryObj } from '@storybook/react';
import CartLink from '@/components/Header/CartLink';

const meta: Meta<typeof CartLink> = {
  title: 'Header/CartLink',
  component: CartLink,
};

export default meta;
type Story = StoryObj<typeof CartLink>;

export const CartLinkStory: Story = {};
