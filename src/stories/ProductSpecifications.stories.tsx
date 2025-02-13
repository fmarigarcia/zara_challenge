import type { Meta, StoryObj } from '@storybook/react';
import ProductSpecifications from '@/components/Product/ProductSpecifications';
import { mockFullProduct } from '@/mocks/product';

const meta: Meta<typeof ProductSpecifications> = {
  title: 'Product/ProductSpecifications',
  component: ProductSpecifications,
};

export default meta;
type Story = StoryObj<typeof ProductSpecifications>;

export const ProductSpecificationsStory: Story = {
  args: {
    product: mockFullProduct,
  },
};
