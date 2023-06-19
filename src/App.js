import './App.css';
import useLocalStorage from 'use-local-storage'

// //For first solution
import useDarkMode from './useDarkMode';

function App() {
  // //For first solution
  // const [theme, toggleTheme] = useDarkMode()


  //for second solution
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    // //For first solution
    // <div className="App" style={{
    //   background: theme === 'dark' ? '#212121' : '#ffffff',
    //   transition: '.2s all'
    // }}>
    //   <button onClick={toggleTheme}>Switch theme</button>
    // </div>


    //for second solution
    <div className="App" data-theme={theme}>
      <span style={{ color: theme === 'light' ? 'black' : 'yellow' }}>Darkmode and Lightmode Themes</span>
      <button onClick={switchTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </div >
  );
}

export default App;
