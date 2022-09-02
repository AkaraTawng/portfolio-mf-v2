import Nav from "./Nav.js";
import Theme from "./Theme.js";
import { useMatch } from "react-router-dom";
import HomeTitle from "./HomeTitle.js";
import ContactTitle from "./ContactTitle.js";
import ProjectTitle from "./ProjectTitle.js";
import { motion } from 'framer-motion';

/* test */
import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.js";

export default function Header(){
    const home = useMatch("/")
    const contact = useMatch("/contact")
    const project = useMatch("/projects");
    const context = useContext(ThemeContext);
    let title = "";
    if (home) {
        title =  <HomeTitle/>; 
    } else if (contact) {
        title = <ContactTitle/>;
    } else if (project) {
        title = <ProjectTitle/>
    }
    console.log("theme", context)
    return <>
        <div id="header-wrapper">
            <div id="nav-theme-flex-container">    
                <Nav/>
                <Theme/>
            </div>   
            <motion.div id="header-title-subtitle-container"
            initial= {{opacity: 0, y: -500}}
            animate={{opacity: 1, y: 0}}
            transition = {{
                delay: 0.3,
                duration: 1,
                type: 'spring',
                bounce: 0.5,

            }}

            >
               {title}
            </motion.div>            
        </div>
     </>};