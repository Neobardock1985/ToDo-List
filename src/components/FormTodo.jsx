import React, { useState, useContext } from "react";
import TaskContext from '../context/taskContext';
import {fetchData} from '../api/api';


const FormTodo = props => {
    const [description, setDescription] = useState("");
    const { handleAddItem } = props;
    const { task, setTask } = useContext(TaskContext);

    const AddItem = (desc) => {
      return handleAddItem({
        done: false,
        id: (+new Date()).toString(),
        description: desc
      });
    }

    const onAdd = e => {
        e.preventDefault();
        AddItem(description);
        setDescription("");
    };


    const onApiAdd = async (e) => {
      e.preventDefault();

      const phraseNumber = prompt('digite el numero de frases que quiere ingresar');
      const response = await fetchData(`https://catfact.ninja/facts?limit=${phraseNumber}&max_length=50`);
    
      response.data.map( (item,key) => {
        AddItem(item.fact)
      })

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
            <div className="todo-list-btnContainer"> 
              <p id="todo-list-btnContainer-item"> 
                <button
                  onClick={onAdd}
                  className="button pink"
                  disabled={description ? "" : "disabled"}
                >
                  Agregar
                </button>
              </p>
              <p> 
                <button
                  onClick={onApiAdd} 
                  className="button pink"
                >
                Api
                </button>
              </p>
            </div>
          </div>
        </div>
      </form>
    );
};


export default FormTodo;