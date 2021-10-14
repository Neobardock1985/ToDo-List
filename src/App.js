import React, { useState } from "react";
import './App.scss';
import Container from './components/Container';
import TaskContext from './context/taskContext';

function App() {
  const [task, setTask] = useState({
    description: '',
  });

  return (
  <div className="App">
    <TaskContext.Provider value={{ task, setTask }}>
      <Container />
   </TaskContext.Provider>
  </div>);
}

export default App;
