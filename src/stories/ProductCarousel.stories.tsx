import type { Meta, StoryObj } from '@storybook/react';
import ProductCarousel from '@/components/ProductCarousel';
import { getMockProductArray } from '@/mocks/product';

const meta: Meta<typeof ProductCarousel> = {
  title: 'Product/ProductCarousel',
  component: ProductCarousel,
};

export default meta;
type Story = StoryObj<typeof ProductCarousel>;

export const ProductCarouselStory: Story = {
  args: {
    products: getMockProductArray(10),
  },
};
