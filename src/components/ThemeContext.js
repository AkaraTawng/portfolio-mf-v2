import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider(props){

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if(theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        };
    }

     const value = {
        theme, 
        toggleTheme,
     }

     return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
     )
}

export {ThemeContext, ThemeProvider};