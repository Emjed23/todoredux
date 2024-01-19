import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtodo } from '../redux/action/todoAction';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (task && description) {
      dispatch(addtodo(task, description));
      setTask('');
      setDescription('');
    }
  };

  return (
    <div className='addsection'>
      <input
        className='input'
        type="text"
        placeholder="Task id"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        className='input'
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTodo;

