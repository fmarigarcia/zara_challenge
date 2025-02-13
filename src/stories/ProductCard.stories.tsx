import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from '@/components/ProductCard';
import { mockProduct } from '@/mocks/product';

const meta: Meta<typeof ProductCard> = {
  title: 'ProductList/ProductCard',
  component: ProductCard,
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const ProductCardStory: Story = {
  args: {
    product: mockProduct,
  },
};
