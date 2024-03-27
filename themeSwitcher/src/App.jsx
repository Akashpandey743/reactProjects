import { useState, useEffect } from 'react';
import './App.css'
import Card from './components/Card';
import ThemeButton from './components/ThemeButton';
import { ThemeProvider } from './context/theme'

function App() {
 const [themeMode, setThemeMode] = useState("light");
 
 const lightTheme = () => {
  setThemeMode("light");
 }

 const darkTheme = () => {
  setThemeMode("dark")
 }

 // code for change in theme 
 useEffect(() => {
  const element = document.querySelector("html");
  element.classList.remove("light", "dark");
  element.classList.add(themeMode);
 }, [themeMode])

  return (
    
     <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                        <div className="w-full">
                            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                              <ThemeButton />
                            </div>

                            <div className="w-full max-w-sm mx-auto">
                              <Card />
                            </div>
                        </div>
                    </div>
      </ThemeProvider>
      

    
  )
}

export default App
