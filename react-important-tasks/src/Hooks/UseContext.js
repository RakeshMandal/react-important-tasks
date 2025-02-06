import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState('light');
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
{children}
        </ThemeContext.Provider>
    )
};

const ThemeButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);
  
    return (
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    );
  };

const UseContext = () => {
  return (
    <div>
        <h3>UseContext</h3>
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>
    </div>
  )
}

export default UseContext
