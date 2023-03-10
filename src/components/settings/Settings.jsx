import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

const defaultConfig = {
    theme: 'dark',
    lang: 'es',
};

export default function Settings({ toggleDark }) {
  const [config, setConfig] = useLocalStorage("config", defaultConfig);

  const toggleMode = (event) => {
    event.preventDefault();
    setConfig((oldConfig) => ({
      ...oldConfig,
      theme: oldConfig.theme === "light" ? "dark" : "light",
    }));
    toggleDark();
  };


    return (
      <div className='text-right'>
      <hr  className='my-4'/>
      <h1 className='mb-4 text-3xl text-yellow-300 font-semibold dark:text-cyan-400'>APP SETTINGS</h1>
      <p className='text-sm '>Actual Config: <span className='italic'>{config.theme}</span> </p>
      <button className="btn mt-4" type="button" onClick={toggleMode}>
        Toggle DarkMode
      </button>
    </div>
    );
}
