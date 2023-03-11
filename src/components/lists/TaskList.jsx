import React, { useState, useEffect } from 'react';
import useList from '../../hooks/useList';
import { motion } from 'framer-motion'
import { addTask, completado, getTasks } from '../../firebase/taskController';

const Tasklist = ({ showSettings, setShowSettings }) => {
  const [newTask, setNewTask] = useState('');
  const [tasklist, setTasklist] = useState([]);


  useEffect(() => {
    getTasks()
      .then((tasks) => setTasklist([...tasks]))
      .catch((e) => console.error(e));
  }, []);



  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addNewTask = () => {
    if (newTask === "") return;
    //Vamos a añadir una nueva tarea a  la base de datos
    const task = { task: newTask, completed: false };
    addTask(task)
      .then(() => {
        return setTasklist([...tasklist, task])

      }).catch((e) => console.log(e))
      .finally(() => setNewTask(''));
    //Cuando se haya añadido -> la mostratemos dentro de TaskList
    // tasks.push(newTask);
    // setNewTask("");
  }

  const toggleCompleteItem = (index) => {

    //Encuentra la tarea
    let task = tasklist.find((t) => t.id === index);
    // Actualizar en la base de datos el estado de la tarea

    completado(task)
    .then(async () => {
      // Cuando se haya añadido -> Mostraremos todas dentro del estado tasklist
      const newTaskList = await getTasks();
      return setTasklist([
        ...newTaskList,
      ]);
    })
    .catch((e) => console.error(e));
    // Cuando se haya actualizado -> Mostraremos todas las tareas dentro del estado tasklist
    // newTaskList[index].completed = !newTask[index].completed;
    // setNewTask([...newTask]);
  };
  const isTasksEmpty = () => tasklist.length === 0;
  const insertNewItem = (e) => e.key === 'Enter' && addNewTask();
  return (
    <>
      <header className="flex justify-between">
        <h1 className="text-3xl text-sky-700 font-semibold dark:text-sky-300">
          Task List v2 - hosted on: Firebase
        </h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn"
          onClick={() => setShowSettings(!showSettings)}
        >
          {!showSettings ? "Show Settings" : "Hide Settings"}
        </motion.button>
      </header>
      <div className="my-4">
        <input
          className="shadow py-1 px-2 rounded-lg outline-none transition-all duration-300 focus:ring-2 mr-2 dark:bg-slate-700"
          value={newTask}
          onKeyDown={insertNewItem}
          onChange={handleInputChange}
          placeholder="New Task"
          type="text"
        />
        <button className="btn btn-add-task" onClick={addNewTask}>
          Create Task
        </button>
      </div>
      {isTasksEmpty() ? (
        <p>Task List is Empty</p>
      ) : (
        <ul className="todo-list">
          {tasklist.map((item, index) => (
            <motion.li initial={{ x: "100vw" }} animate={{ x: 0 }} key={index}>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  // onClick={() => removeItem(index)}
                  onClick={() => toggleCompleteItem(item.id)}
                  checked={item.completed}
                  onChange={() => { }}
                />
                <span
                  className={`ml-2 text-gray-800 dark:text-gray-100 text-sm italic ${item.completed && "line-through"
                    }`}
                >
                  {item.task}
                </span>
              </label>
            </motion.li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Tasklist;
