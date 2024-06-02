import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import NewTodoItem from '../NewTodoItem';

describe('NewTodoItem', () => {
  it('renders NewTodoItem correctly', () => {
    // ARRANGE
    const mockAddTodo = jest.fn();
    const mockSetTodoDescription = jest.fn();
    const { getByText } = render(
      <NewTodoItem addTodo={mockAddTodo} newTodoDescription='Description' setNewTodoDescription={mockSetTodoDescription} />
    );
    const button = getByText('Add Todo Item');
    const description = getByText('Description');

    // ACT
    // ASSERT
    expect(button).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('should call add todo when the button is clicked', () => {
    // ARRANGE
    const mockAddTodo = jest.fn();
    const mockSetTodoDescription = jest.fn();
    const { getByText } = render(
      <NewTodoItem addTodo={mockAddTodo} newTodoDescription='Description' setNewTodoDescription={mockSetTodoDescription} />
    );
    const button = getByText('Add Todo Item');

    // ACT
    fireEvent.click(button);
    // ASSERT
    expect(mockAddTodo).toHaveBeenCalled();
  });

  it('should call set todo description when the text changed', () => {
    // ARRANGE
    const mockAddTodo = jest.fn();
    const mockSetTodoDescription = jest.fn();
    const { getByRole } = render(
      <NewTodoItem addTodo={mockAddTodo} newTodoDescription='Description' setNewTodoDescription={mockSetTodoDescription} />
    );
    const textarea = getByRole('textbox');

    // ACT
    fireEvent.change(textarea, { target: { value: 'Buy milk' } });

    // ASSERT
    expect(mockSetTodoDescription).toHaveBeenCalledWith('Buy milk');
  });
});
