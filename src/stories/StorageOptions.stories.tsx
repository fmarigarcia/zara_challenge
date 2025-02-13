import type { Meta, StoryObj } from '@storybook/react';
import StorageOptions from '@/components/Product/ProductOptions/StorageOptions';
import { mockFullProduct } from '@/mocks/product';

const meta: Meta<typeof StorageOptions> = {
  title: 'Product/StorageOptions',
  component: StorageOptions,
};

export default meta;
type Story = StoryObj<typeof StorageOptions>;

export const StorageOptionsStory: Story = {
  args: {
    storageOptions: mockFullProduct.storageOptions,
    selectedStorage: undefined,
    setSelectedStorage: () => {},
  },
};
