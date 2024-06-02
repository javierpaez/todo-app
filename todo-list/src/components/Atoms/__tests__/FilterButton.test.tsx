import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import FilterButton from '../FilterButton';

describe('FilterButton', () => {
  it('renders FilterButton correctly', () => {
    // ARRANGE
    const mockHandleFilterBy = jest.fn();
    const { getByText } = render(
      <FilterButton filterText='All' filterBy='Active' handleFilterBy={mockHandleFilterBy} />
    );
    const button = getByText('All');

    // ACT
    // ASSERT
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('h-fit p-4 bg-teal-500 rounded');
  });

  it('should call handle filter function when button is clicked', () => {
    // ARRANGE
    const mockHandleFilterBy = jest.fn();
    const { getByText } = render(
      <FilterButton filterText='All' filterBy='Active' handleFilterBy={mockHandleFilterBy} />
    );
    const button = getByText('All');

    // ACT
    fireEvent.click(button);

    // ASSERT
    expect(mockHandleFilterBy).toHaveBeenCalled();
  });
});
