import React from 'react';

import useTodo from '../hooks/useTodo';
import FilterButton from '../../Atoms/FilterButton';
import Item from '../../Molecules/TodoItem/TodoItem';


const TodoList = () => {
  const {
    addTodo,
    changeStatusTodo,
    deleteTodoFromList,
    newTodoDescription,
    setNewTodoDescription,
    todoItems,
    handleFilterBy,
    filterBy,
  } = useTodo();

  return (
    <section className='flex lg:flex-row flex-col-reverse lg:items-start items-center'>
      <div className='h-full w-full flex flex-col justify-center items-center lg:space-y-10 space-y-2'>
        <div className='flex lg:flex-row lg:w-3/5 flex-col text-teal-950 p-4 space-y-2 items-center'>
          <textarea
            className='lg:w-4/5 w-72 rounded border border-solid border-teal-900 p-4'
            value={newTodoDescription}
            onChange={(e) => setNewTodoDescription(e.target.value)}
          />
          <button
            className='h-fit p-4 ml-4 bg-teal-500 rounded hover:bg-teal-700 text-white font-bold'
            onClick={addTodo}>
            Add Todo Item
          </button>
        </div>
        <ul className='w-full flex flex-col justify-center items-center'>
          {todoItems.map((todoItem) => (
            <Item
              key={todoItem.id}
              todoItem={todoItem}
              changeStatusTodo={changeStatusTodo}
              deleteTodoFromList={deleteTodoFromList}
            />
          ))}
        </ul>
      </div>
      <div className='flex flex-row p-4 items-start justify-start'>
        <FilterButton filterText='All' filterBy={filterBy} handleFilterBy={handleFilterBy}/>
        <FilterButton filterText='Active' filterBy={filterBy} handleFilterBy={handleFilterBy}/>
        <FilterButton filterText='Completed' filterBy={filterBy} handleFilterBy={handleFilterBy}/>
      </div>
    </section>
  );
};

export default TodoList;
