import Nav from "./Nav.js";
import Theme from "./Theme.js";
import { useMatch } from "react-router-dom";
import HomeTitle from "./HomeTitle.js";
import ContactTitle from "./ContactTitle.js";
import ProjectTitle from "./ProjectTitle.js";

export default function Header({key}){
    const home = useMatch("/")
    const contact = useMatch("/contact")
    const project = useMatch("/projects");
    let title = "";
    if (home) {
        title =  <HomeTitle key={key} />; 
    } else if (contact) {
        title = <ContactTitle key={key}/>;
    } else if (project) {
        title = <ProjectTitle/>
    }

    return <>
        <div id="header-wrapper">
            <div id="nav-theme-flex-container">    
                <Nav/>
                <Theme/>
            </div>   
                <div id="header-title-subtitle-container">
                {title}
                </div>        
        </div>
     </>};