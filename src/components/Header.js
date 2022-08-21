import Nav from "./Nav.js";
import Theme from "./Theme.js";

/* test */
import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.js";



export default function Header(){
    const context = useContext(ThemeContext);
    console.log("theme", context)
    return <>
        <div id="header-wrapper">
            <div id="nav-theme-flex-container">    
                <Nav/>
                <Theme/>
            </div>   
            <div id="header-title-subtitle-container">
                <h1 className={context.theme} id="header-title">Christopher Chamberlain</h1>
                <h2>Front End Web Developer</h2>
            </div>            
        </div>
     </>};