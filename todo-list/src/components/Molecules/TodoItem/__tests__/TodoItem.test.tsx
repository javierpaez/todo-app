import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Item from '../TodoItem';
import { TodoItem } from '../../../../models/TodoItem';

const mockTodoItem: TodoItem = {
  id: '1',
  description: 'Do challenge',
  completed: false,
};

describe('TodoItem', () => {
  it('renders TodoItem correctly', () => {
    // ARRANGE
    const mockChangeStatusTodo = jest.fn();
    const mockDeleteTodoFromList = jest.fn();

    const { getByText } = render(
      <Item
        changeStatusTodo={mockChangeStatusTodo}
        deleteTodoFromList={mockDeleteTodoFromList}
        todoItem={mockTodoItem}
      />
    );
    const todoDescription = getByText('Do challenge');

    // ACT
    // ASSERT
    expect(todoDescription).toBeInTheDocument();
  });

  it('renders TodoItem completed', () => {
    // ARRANGE
    const mockChangeStatusTodo = jest.fn();
    const mockDeleteTodoFromList = jest.fn();

    const { getByText } = render(
      <Item
        changeStatusTodo={mockChangeStatusTodo}
        deleteTodoFromList={mockDeleteTodoFromList}
        todoItem={{ ...mockTodoItem, completed: true }}
      />
    );
    const todoDescription = getByText('Do challenge');

    // ACT
    // ASSERT
    expect(todoDescription).toHaveClass('line-through');
  });

  it('should call delete todo when delete button is clicked', () => {
    // ARRANGE
    const mockChangeStatusTodo = jest.fn();
    const mockDeleteTodoFromList = jest.fn();

    const { getByText } = render(
      <Item
        changeStatusTodo={mockChangeStatusTodo}
        deleteTodoFromList={mockDeleteTodoFromList}
        todoItem={mockTodoItem}
      />
    );
    const deleteButton = getByText('X');

    // ACT
    fireEvent.click(deleteButton);
    // ASSERT
    expect(mockDeleteTodoFromList).toHaveBeenCalled();
  });

  it('should call set todo description when the text changed', () => {
    // ARRANGE
    const mockChangeStatusTodo = jest.fn();
    const mockDeleteTodoFromList = jest.fn();

    const { getByRole } = render(
      <Item
        changeStatusTodo={mockChangeStatusTodo}
        deleteTodoFromList={mockDeleteTodoFromList}
        todoItem={mockTodoItem}
      />
    );
    const checkbox = getByRole('checkbox');

    // ACT
    fireEvent.click(checkbox);

    // ASSERT
    expect(mockChangeStatusTodo).toHaveBeenCalledWith('1');
  });
});
