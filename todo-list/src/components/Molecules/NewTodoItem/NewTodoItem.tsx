import React from "react";

interface NewTodoItemProps {
  newTodoDescription: string;
  setNewTodoDescription: (text: string) => void;
  addTodo: () => void;
}

const NewTodoItem = ({ newTodoDescription, setNewTodoDescription, addTodo }: NewTodoItemProps) => {
  return (
    <div className='flex lg:flex-row lg:w-3/5 flex-col text-teal-950 p-4 space-y-2 items-center'>
      <textarea
        className='lg:w-4/5 w-72 rounded border border-solid border-teal-900 p-4'
        value={newTodoDescription}
        onChange={(e) => setNewTodoDescription(e.target.value)}
      />
      <button className='h-fit p-4 ml-4 bg-teal-500 rounded hover:bg-teal-700 text-white font-bold' onClick={addTodo}>
        Add Todo Item
      </button>
    </div>
  );
};

export default NewTodoItem;
