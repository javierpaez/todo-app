import React from 'react';

import { TodoItem } from '../../../models/TodoItem';

interface ItemProps {
  todoItem: TodoItem
  changeStatusTodo: (itemId: string) => void
  deleteTodoFromList: (itemId: string) => void
}

const Item = ({todoItem, changeStatusTodo, deleteTodoFromList}: ItemProps) => {
  return (
    <li
      className='lg:w-2/3 w-5/6 my-2 p-4 flex justify-between items-center bg-opacity-30 border border-solid rounded border-teal-900 bg-teal-200'>
      <div className='flex flex-row items-center'>
        <input
          className='h-6 w-6 min-w-6'
          type='checkbox'
          checked={todoItem.completed}
          onChange={() => changeStatusTodo(todoItem.id)}
        />
        <span className={`text-xl pl-2 ${todoItem.completed ? 'line-through' : ''}`}>{todoItem.description}</span>
      </div>
      <button
        className='bg-orange-700 p-2 rounded hover:bg-orange-900 text-yellow-100 font-bold'
        onClick={() => deleteTodoFromList(todoItem.id)}>
        X
      </button>
    </li>
  );
};

export default Item;
