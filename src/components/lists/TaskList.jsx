import React, { useState } from 'react';
import useList from '../../hooks/useList';
import { motion } from 'framer-motion'

const Tasklist = ({ showSettings, setShowSettings }) => {
  const tasks = useList([]); //UN Hok personalizado
  const [newTask, setNewTask] = useState('');



  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addNewTask = () => {
    if (newTask === "") return;
    tasks.push(newTask);
    setNewTask("");
  }

  const toggleCompleteItem = (index) => {
    // let newTaskList = tasklist;
    let task = newTask.find((t) => t.id === index);
    // Actualizar en la base de datos el estado de la tarea
    // Cuando se haya actualizado -> Mostraremos todas las tareas dentro del estado tasklist
    newTask[index].completed = !newTask[index].completed;
    setNewTask([...newTask]);
  };

  const insertNewItem = (e) => e.key === 'Enter' && addNewTask();
  return (
    <div>
      <header className='flex justify-between'>
        <h1 className='text-3xl text-sky-700 font-semibold dark:text-sky-300'>
          Task List V2.0 hosted on Firebase

        </h1>
        <motion.button whileHover={{scale: 1.1} }
        whileTap={{scale: 0.9}}
        className='btn'
          onClick={() => setShowSettings(!showSettings)}
        > {!showSettings ? "Show Settings" : "Hide Settings"}
        </motion.button>
      </header>

      <div className='my-4'>
        <input
          className='shadow py-1 px-2 rounded-lg outline-none
        transition-all
        duration-300 focus:ring-2
        mr-3
        dark:bg-slate-700
        '
          value={newTask} onChange={handleInputChange} placeholder="New Task" type="text" onKeyDown={insertNewItem} />
        <button
          className='btn'
          onClick={addNewTask}>
          Create Task
        </button>
      </div>


      {tasks.isEmpty()
        ? (<p>Task List is Empty</p>)
        : (
          <ul>
            {tasks.value.map((task, index) => (
              <motion.li 
              initial={{x:"100vh"}}
              animate={{x:0}}
              key={index}>
                <input
                  type="checkbox"
                  // onClick={() => tasks.remove(index)}
                  onChange={() => { }}
                  checked={task.id}

                />
                <span className={`ml-2 text-gray-800 text-sm italic  dark:text-gray-50 ${task.completed && "line-through"
                  }`}>{task}</span>

              </motion.li>
            ))}

          </ul>
        )}

      {/* <button onClick={() => tasks.clean()}>Vaciar</button> */}
      {/* <button onClick={() => tasks.order()}>Ordenar Lista</button>
      <button onClick={() => tasks.reverse()}>Invertir Cadenas</button> */}

    </div>
  );
};

export default Tasklist;
