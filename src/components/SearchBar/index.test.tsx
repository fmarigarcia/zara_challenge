import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import SearchBar from '.';

describe('SearchBar', () => {
  const mockSetSearchQuery = jest.fn();
  const searchQuery = 'search';
  const resultAmount = 1;

  test('renders correctly with query', () => {
    render(<SearchBar searchQuery={searchQuery} setSearchQuery={mockSetSearchQuery} productQuantity={resultAmount} />);

    expect(screen.getByText(`${resultAmount} RESULTS`));
    expect(screen.getByRole('searchbox'));
    expect(screen.queryByRole('button')).not.toBeNull();
  });

  test('renders correctly without query', () => {
    render(<SearchBar searchQuery="" setSearchQuery={mockSetSearchQuery} productQuantity={resultAmount} />);

    expect(screen.getByText(`${resultAmount} RESULTS`));
    expect(screen.getByRole('searchbox'));
    expect(screen.queryByRole('button')).toBeNull();
  });

  test('calls clear on button click', () => {
    render(<SearchBar searchQuery={searchQuery} setSearchQuery={mockSetSearchQuery} productQuantity={resultAmount} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockSetSearchQuery).toHaveBeenCalledWith('');
  });
});
