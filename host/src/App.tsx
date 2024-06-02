import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import './index.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Loader from './components/Loader/Loader';
import NotFound from './components/NotFound/NotFound';

const RemoteTodoApp = React.lazy(() => import('todo/TodoApp'));

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<RemoteTodoApp />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
