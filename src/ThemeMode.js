import React,{useState,useEffect} from 'react'

const useThemeMode = () => {

  const[mode,setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      window.localStorage.setItem('mode','dark')
      setMode('dark');
    }else{
      window.localStorage.setItem('mode','light');
      setMode('light');
    }
  }

  useEffect(()=>{
    const theme = window.localStorage.getItem('mode');
    if(theme){
      setMode(theme)
    }
  },[])


  return[mode,toggleMode]
}

export default useThemeMode