import React from 'react';

const TaskContext = React.createContext({
  task: {
    description: '',
  },
  setTask: () => {}
});

export default TaskContext;