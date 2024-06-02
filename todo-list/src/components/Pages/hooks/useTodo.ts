import { useEffect, useMemo, useState } from 'react';
import { TodoItem } from '../../../models/TodoItem';

const saveItemsLocalStorage = (newItems: TodoItem[]) => localStorage.setItem('todoItems', JSON.stringify(newItems));
const readItemsLocalStorage = () => localStorage.getItem('todoItems');

const useTodo = () => {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [filterBy, setFilterBy] = useState<string>('All');
  const [newTodoDescription, setNewTodoDescription] = useState<string>('');

  const addTodo = () => {
    if (!newTodoDescription) return;
    const newId = crypto.randomUUID();
    const newTodoItem: TodoItem = {
      id: newId,
      description: newTodoDescription,
      completed: false,
    };
    const freshedTodoItems = [...todoItems, newTodoItem];
    setTodoItems(freshedTodoItems);
    saveItemsLocalStorage(freshedTodoItems);
    setNewTodoDescription('');
  };

  const deleteTodoFromList = (id: string) => {
    const updatedTodos = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(updatedTodos);
    saveItemsLocalStorage(updatedTodos);
  };

  const changeStatusTodo = (id: string) => {
    const updatedTodos = todoItems.map((todoItem) => {
      if (todoItem.id === id) todoItem.completed = !todoItem.completed;
      return todoItem;
    });
    setTodoItems(updatedTodos);
    saveItemsLocalStorage(updatedTodos);
  };

  const handleFilterBy = (filterBy: string) => {
    setFilterBy(filterBy);
  };

  useEffect(() => {
    const savedTodoItems = readItemsLocalStorage();
    if (savedTodoItems) {
      const savedItems = JSON.parse(savedTodoItems);
      setTodoItems(savedItems);
    }
  }, []);

  const filteredData = useMemo(() => {
    if (filterBy === 'All') {
      return todoItems;
    }
    return todoItems.filter((todoItem) => (filterBy === 'Completed' ? todoItem.completed : !todoItem.completed));
  }, [todoItems, filterBy]);

  return {
    addTodo,
    deleteTodoFromList,
    changeStatusTodo,
    newTodoDescription,
    setNewTodoDescription,
    todoItems: filteredData,
    handleFilterBy,
    filterBy,
  };
};

export default useTodo;
