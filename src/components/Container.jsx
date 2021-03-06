import React, { useState } from "react";
import FormTodo from "./FormTodo";
import TaskList from "./TaskList";

const Container = () => {
  const [list, setList] = useState([]);

  const handleAddItem = addItem => {  
    list.push(addItem)
    setList([...list])
  };

  return (
    <div>
       <div id="ToDo-title">
         Lista de Tareas
       </div>
      <FormTodo handleAddItem={handleAddItem} />
      <TaskList list={list} setList={setList} />
    </div>
  );
};
export default Container