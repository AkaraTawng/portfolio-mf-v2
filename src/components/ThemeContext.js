import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider(props){

    const [theme, setTheme] = useState("dark");
}