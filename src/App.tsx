import React from 'react';
import ToDoList from './components/ToDoLIst';
import Header from './layout/Header/Header';

function App() {
  return (
    <>
      <Header />
      <ToDoList title='first list'  />
    </>
  );
}

export default App;
