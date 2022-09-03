import { NavLink } from "react-router-dom"; 
import { useContext } from 'react';
import { ThemeContext } from "./ThemeContext.js";


const NavLinksLg = (props) => {
    const context = useContext(ThemeContext)
 
    return (<>
            <ul id="nav-links-container" className={`${context.theme} nav-links-lg`}>
                <li>
                    <NavLink className={`nav-link ${context.theme}`} to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink className={`nav-link ${context.theme}`} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={`nav-link ${context.theme}`} to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink 
                    className={`nav-link external-navlink ${context.theme}`} target="_blank" rel="noreferrer" to="/resume">Resume</NavLink>
                </li>
                <li>
                    <NavLink className={`nav-link external-navlink ${context.theme}`}  to="/linkedin" target="_blank" rel="noreferrer">Linkedin</NavLink>
                </li>
                <li>
                    <NavLink className={`nav-link external-navlink ${context.theme}`}  to="/github" target="_blank" rel="noreferrer">GitHub</NavLink>
                </li>
            </ul>
    </>)
};

export default NavLinksLg;