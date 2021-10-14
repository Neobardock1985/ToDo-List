import React, { useState, useContext } from "react";
import TaskContext from '../context/taskContext';


const FormTodo = props => {
    const [description, setDescription] = useState("");
    const { handleAddItem } = props;
    const { task, setTask } = useContext(TaskContext);

    const onAdd = e => {
        e.preventDefault();

        //console.log('description',description);
        
        handleAddItem({
            done: false,
            id: (+new Date()).toString(),
            description
        });

        setDescription("");
    };

    const onChange = e => {

      setDescription(e.target.value);

      const taskCopy = task;
      taskCopy.description = e.target.value;
      setTask(taskCopy);
    }

    return (
      <form >
        <div className="todo-list">
          <div className="file-input">
            <input
              type="text"
              className="text"
              value={description}
              onChange={onChange}
            />
            <button
              onClick={onAdd}
              className="button pink"
              disabled={description ? "" : "disabled"}
            >
              Agregar
            </button>
          </div>
        </div>
      </form>
    );
};


export default FormTodo;