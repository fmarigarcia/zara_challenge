import type { Meta, StoryObj } from '@storybook/react';
import CartProductCard from '@/components/CartProductCard';
import { cartProductMock } from '@/mocks/product';

const meta: Meta<typeof CartProductCard> = {
  title: 'Cart/CartProductCard',
  component: CartProductCard,
};

export default meta;
type Story = StoryObj<typeof CartProductCard>;

export const CartProductCardStory: Story = {
  args: {
    onDelete: () => {},
    item: cartProductMock,
  },
};
