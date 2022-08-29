import { useContext  } from "react"
import { ThemeContext } from "./ThemeContext"
export default function Theme() {
    const theme = useContext(ThemeContext);

    return (<>
    <label className="toggle">
        <input onChange={() => theme.toggleTheme()}  type="checkbox"/>
        <span className="slider"/>
    </label> 
</>)}

