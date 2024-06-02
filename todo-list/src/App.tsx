import { Route, Routes } from 'react-router-dom';
import React from 'react';

import './index.scss';
import TodoList from './components/Pages/TodoList/TodoList';

const App = () => {
  return (
    <div className='border-4 border-teal-800'>
      <Routes>
        <Route path='/' element={<TodoList />} />
      </Routes>
    </div>
  );
};

export default App;
