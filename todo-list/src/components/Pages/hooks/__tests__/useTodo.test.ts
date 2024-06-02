import { act, renderHook } from '@testing-library/react';
import useTodo from '../useTodo';

const mockGetItem = jest.fn().mockReturnValue(
  JSON.stringify([
    { id: '1', description: 'task 1', completed: false },
    { id: '2', description: 'task 2', completed: true },
    { id: '3', description: 'task 3', completed: false },
  ])
);
const mockSetItem = jest.fn();
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: (...args: string[]) => mockGetItem(...args),
    setItem: (...args: string[]) => mockSetItem(...args),
  },
});

describe('useTodo hook', () => {
  beforeEach(() => {
    mockGetItem.mockClear();
    mockSetItem.mockClear();
  });

  it('should initializes with empty state and checks local storage', () => {
    // ARRANGE
    const { result } = renderHook(() => useTodo());
    const { todoItems, filterBy, newTodoDescription } = result.current;

    // ACT
    // ASSERT
    expect(todoItems.length).toEqual(3);
    expect(filterBy).toBe('All');
    expect(newTodoDescription).toBe('');

    expect(mockGetItem).toHaveBeenCalledWith('todoItems');
  });

  it('should add a new item in todo list, updates state, and saves to local storage', () => {
    // ARRANGE
    const { result } = renderHook(() => useTodo());
    const { addTodo, setNewTodoDescription } = result.current;

    // ACT
    act(() => {
      setNewTodoDescription('new task');
      addTodo();
    });

    // ASSERT
    expect(result.current.todoItems.length).toBe(3);
  });

  it('should delete an existing item from todo list', () => {
    // ARRANGE
    const { result } = renderHook(() => useTodo());
    const { todoItems, deleteTodoFromList } = result.current;
    const itemId = todoItems[0].id;

    // ACT
    act(() => deleteTodoFromList(itemId));

    // ASSERT
    expect(result.current.todoItems.length).toBe(2);
    expect(mockSetItem).toHaveBeenCalledWith(
      'todoItems',
      '[{"id":"2","description":"task 2","completed":true},{"id":"3","description":"task 3","completed":false}]'
    );
  });

  it('should change status of an existing item from todo list', () => {
    // ARRANGE
    const { result } = renderHook(() => useTodo());
    const { addTodo, changeStatusTodo, todoItems } = result.current;
    const itemId = todoItems[0].id;

    // ACT
    addTodo();
    changeStatusTodo(itemId);

    // ASSERT
    expect(todoItems[0].completed).toBe(true);
    expect(mockSetItem).toHaveBeenCalledWith(
      'todoItems',
      '[{"id":"1","description":"task 1","completed":true},{"id":"2","description":"task 2","completed":true},{"id":"3","description":"task 3","completed":false}]'
    );
  });

  it('should change filter by', () => {
    // ARRANGE
    const { result } = renderHook(() => useTodo());
    const { handleFilterBy } = result.current;

    // ACT
    act(() => handleFilterBy('Completed'));

    // ASSERT
    expect(result.current.filterBy).toBe('Completed');
  });

  it('should filter the data', () => {
    // ARRANGE
    const { result } = renderHook(() => useTodo());
    const { todoItems, handleFilterBy } = result.current;

    // ACT
    expect(todoItems.length).toBe(3);
    act(() => handleFilterBy('Active'));

    // ASSERT
    expect(result.current.filterBy).toBe('Active');
    expect(result.current.todoItems.length).toBe(2);
  });
});
