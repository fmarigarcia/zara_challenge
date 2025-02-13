import type { Meta, StoryObj } from '@storybook/react';
import ProductOptions from '@/components/Product/ProductOptions';
import { mockFullProduct } from '@/mocks/product';

const meta: Meta<typeof ProductOptions> = {
  title: 'Product/ProductOptions',
  component: ProductOptions,
};

export default meta;
type Story = StoryObj<typeof ProductOptions>;

export const ProductOptionsStory: Story = {
  args: {
    product: mockFullProduct,
  },
};
