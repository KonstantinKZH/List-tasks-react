import React from 'react';
import { useState, useRef } from 'react';
import Task from './components/Task/Task';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isError, setError] = useState(false);
  const [form, setForm] = useState({
    task: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleClickAddTask = () => {
    
    // Очищаем строку после нажатия по кнопке: добавить задачу.
    setForm({
      ...form,
      task: "",
    });

    // Прерываем выполнение программы, если в поле ввода прописан только пробел (несколько пробелов)
    if(form.task.charAt(0) === " ") return;

    if (form.task === "") {
      setError(true);
      return;
    };

    setError(false);

    const task = {
      id: tasks.length,
      nameTask: form.task,
    };

    setTasks([...tasks, task]);
  };

  const handleDeleteTodo = (e) => {
    setTasks(tasks.filter(task => task.id !== Number(e.target.id)));
  };

  return (
    <div className='form'>
      <div className='form-inner'>
        <div className='input-tools'>
          <input onChange={handleInputChange} type="text" name="task" className="input-task" value={form.task} />
          <button onClick={handleClickAddTask} className='btn-add-task'>Добавить</button>
        </div>
        <Task tasks={tasks} onClick={handleDeleteTodo} />
        {isError ? (<p className='text-error'>Поле ввода не должно быть пустым</p>) : ""}
      </div>
    </div>
  );
};

export default App;
