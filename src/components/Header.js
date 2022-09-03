import Nav from "./Nav.js";
import Theme from "./Theme.js";
import { useMatch } from "react-router-dom";
import HomeTitle from "./HomeTitle.js";
import ContactTitle from "./ContactTitle.js";
import ProjectTitle from "./ProjectTitle.js";
import { useContext } from 'react';
import { ThemeContext } from "./ThemeContext.js";
export default function Header(){
    const context = useContext(ThemeContext)
    const home = useMatch("/")
    const contact = useMatch("/contact")
    const project = useMatch("/projects");
    let title = "";
    if (home) {
        title =  <HomeTitle/>; 
    } else if (contact) {
        title = <ContactTitle/>;
    } else if (project) {
        title = <ProjectTitle/>
    }

    return <>
        <div id="header-wrapper" className={context.theme}>
            <div id="nav-theme-flex-container">    
                <Nav/>
                <Theme/>
            </div>   
            <div id="header-title-subtitle-container">
                {title}
            </div>        
        </div>
     </>};