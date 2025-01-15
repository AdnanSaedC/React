
import React ,{ useEffect, useState }  from 'react'
import { ThemeProvider } from '../context/theme'
import ThemeBtn from './components/themeBtn';
import Card from './components/card';


function App() {

  let [themeMode,setThemeMode]=useState("light");

  let setLightTheme=()=>{
    setThemeMode("light");
  }
  let setDarkTheme=()=>{
    setThemeMode("dark");
  }
  
  //this part is to change the actual theme
  useEffect(()=>{
    //removing existing theme
    document.querySelector('html').classList.remove('light','dark')
    
    
    //now adding new theme
    document.querySelector('html').classList.add(themeMode)
    
  },[themeMode])


  return (
    <ThemeProvider value={{themeMode,setLightTheme,setDarkTheme}}>
      
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* Theme Btn */}
              <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
              {/* Card btn */}
              <Card/>
            </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
