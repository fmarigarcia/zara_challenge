import type { Meta, StoryObj } from '@storybook/react';
import ColorOptions from '@/components/Product/ProductOptions/ColorOptions';
import { mockFullProduct } from '@/mocks/product';

const meta: Meta<typeof ColorOptions> = {
  title: 'Product/ColorOptions',
  component: ColorOptions,
};

export default meta;
type Story = StoryObj<typeof ColorOptions>;

export const ColorOptionsStory: Story = {
  args: {
    colorOptions: mockFullProduct.colorOptions,
    selectedColor: undefined,
    setSelectedColor: () => {},
  },
};
