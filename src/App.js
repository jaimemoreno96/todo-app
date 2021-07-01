import React, { Fragment } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import DarkModeProvider from './context/darkmode/DarkModeContext';
import ToDoState from './context/todo/ToDoState';
import ToDo from './pages/ToDo';

const App = () => {
  return (
    <HelmetProvider>
      <ToDoState>
        <DarkModeProvider>
          <Fragment>
            <Helmet>
              <title>ToDo App</title>
            </Helmet>
            <ToDo />
          </Fragment>
        </DarkModeProvider>
      </ToDoState>
    </HelmetProvider>
  );
}

export default App;