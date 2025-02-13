import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from '@/components/SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'ProductList/SearchBar',
  component: SearchBar,
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const SearchBarStory: Story = {
  args: {
    searchQuery: '',
    setSearchQuery: () => {},
  },
};
