import React, { Fragment } from 'react';
import ToDoProvider from './context/ToDoContext';
import ToDo from './pages/ToDo';

const App = () => {
  return (
    <ToDoProvider>
      <Fragment>
        <ToDo />
      </Fragment>
    </ToDoProvider>
  );
}

export default App;