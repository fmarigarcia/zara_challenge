import type { Meta, StoryObj } from '@storybook/react';
import ProductList from '@/components/ProductList';
import { getMockProductArray } from '@/mocks/product';

const meta: Meta<typeof ProductList> = {
  title: 'ProductList/ProductList',
  component: ProductList,
};

export default meta;
type Story = StoryObj<typeof ProductList>;

export const ProductListStory: Story = {
  args: {
    products: getMockProductArray(10),
  },
};
