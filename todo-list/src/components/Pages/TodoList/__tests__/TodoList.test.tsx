import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import TodoList from '../TodoList';

Object.defineProperty(globalThis, 'crypto', {
  value: {
    randomUUID: () => 'mockedUUID-0-0-1'
  }
});

describe('TodoList', () => {
  it('renders TodoList correctly', () => {
    // ARRANGE
    render(
      <TodoList/>
    );
    const input = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: /Add Todo Item/i });
    const todoList = screen.getByRole('list');
    const completedFilterButton = screen.getByRole('button', { name: /Completed/i });

    // ACT
    // ASSERT
    expect(input).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(todoList).toBeInTheDocument();
    expect(completedFilterButton).toBeInTheDocument(); 
  });

  it('should add item and rerendering should persist it', () => {
    // ARRANGE
    const { rerender } = render(<TodoList />);
    const input = screen.getByRole('textbox');
    const todoList = screen.getByRole('list');

    // ACT
    fireEvent.change(input, { target: { value: 'task 1' } });
    fireEvent.click(screen.getByRole('button', { name: /Add Todo Item/i }));

    expect(todoList.children.length).toBe(1);

    rerender(<TodoList />);

    const todoItem = screen.getByText(/task 1/i);
    // ASSERT
    expect(todoItem).toBeInTheDocument();
  });
});
