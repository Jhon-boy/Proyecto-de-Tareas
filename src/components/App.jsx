import React from 'react';
import { useEffect } from "react";
import Tasklist from './lists/TaskList';
import Settings from './settings/Settings';
import '../App.css'
import { motion, AnimatePresence} from 'framer-motion'

const App = () => {
  const [dark, setDark] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);


  useEffect(() => {
    // const config = JSON.parse(localStorage.getItem("config"));
    // setDark(config.theme);
    setDark(false);
  }, []);

  /**
   * Función para intercambiar la variable de estado light <-> dark
   */

  const toggleDark = () => setDark(!dark);
  return (
    <div className={` ${dark ? "dark" : ""}`}>
      <div className={`h-screen p-4 flex flex-col bg-gray-100 dark:bg-slate-800 transition
      dark:text-gray-50`}>
        <Tasklist showSettings={showSettings} setShowSettings={setShowSettings} />

<AnimatePresence
initial = {false}
onExitComplete={ () => null}
>
  {showSettings && (          
    <motion.div
            initial={{ y: '100vh' }}
            animate={{ y: '0' }}
            exit={{ y: '100vh' }}
          >
            <Settings toggleDark={toggleDark} />
          </motion.div> 
)}
</AnimatePresence>
            
      </div>
    </div>

  );
};

export default App;
