import React, { useState, useContext } from "react";
import Checkbox from "./Checkbox";
import TaskContext from '../context/taskContext';


const TaskList = (props) => {
    const { list, setList } = props;
    const [unFilterList, setUnfilterList] = useState([]);
    const [itemChecked, setItemChecked] = useState([]);
    const { task } = useContext(TaskContext);

    const onChangeStatus = e => {
        const { name, checked } = e.target;
        
        const updateList = list.map(item => ({
          ...item,
          done: item.id === name ? checked : item.done
        }));

        setItemChecked(name);
        setList(updateList);
    };  


    const onSearchitem = () => {
      setUnfilterList(list);
      const filteredList = list.filter(item => item.description === task.description);

      if(filteredList.length > 0){
        setList(filteredList);
      }else(
        setList(unFilterList)
      )
    }

    const onUpdateItem = () => {

      const updateList = list.map(item => ({
        ...item,
        description: item.id === itemChecked ? task.description : item.description
      }));
      
      setList(updateList);

    };

    const onRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList);
    };


    const taskList = list.map(item => (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
    ));


    return (
        <div className="todo-list">          
          {(list.length > 0 ) ? taskList : "No hay tareas"} 

          {list.length ? (
            <div className="toDoBtn-Container">
              <p>
                <button className="button blue" onClick={onSearchitem}>
                  Buscar
                </button>     
              </p>
              <p>
                <button className="button blue" onClick={onUpdateItem}>
                  Actualizar
                </button>     
              </p>
              <p>
                <button className="button blue" onClick={onRemoveItem}>
                  Eliminar
                </button>
              </p>
            </div>
          ) : null}
        </div>
      );
};

export default TaskList;