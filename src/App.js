import './App.css';
import React from 'react';
import useThemeMode from './ThemeMode';

const App = ()=> {
  const[mode,toggleMode] = useThemeMode()
  return (
    <div className='theme-mode'
      style={{background:mode ==='dark'?'#202020':'#ffffff',
      transition:'all .2s ease-in-out'}}
    >
      <button className='btn' type='button' onClick={toggleMode}>switch mode</button>
    </div>
  
  );
}

export default App;
