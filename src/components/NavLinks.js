import { NavLink } from "react-router-dom"; 
import { motion } from "framer-motion";
import { useContext } from 'react';
import { ThemeContext } from "./ThemeContext.js";


const NavLinks = (props) => {
    const context = useContext(ThemeContext)
    const animateFrom = {
        opacity: 0, 
        y: -50
    }
    
    const animateTo = {
        opacity: 1, 
        y: 0
    }

    return (<>
            <ul id="nav-links-container" className={context.theme}>
                <motion.li 
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.05}}
                    onClick={() => props.onCloseMobileMenu}>
                    <NavLink className={`nav-link ${context.theme}`} to="/contact">Contact</NavLink>
                </motion.li>
                <motion.li 
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.1}}
                    onClick={() => props.onCloseMobileMenu}>
                    <NavLink className={`nav-link ${context.theme}`} to="/">Home</NavLink>
                </motion.li>
                <motion.li 
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.2}}
                    onClick={() => props.onCloseMobileMenu}>
                    <NavLink className={`nav-link ${context.theme}`} to="/projects">Projects</NavLink>
                </motion.li>
                <motion.li 
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.3}}
                    onClick={() => props.onCloseMobileMenu}>
                    <NavLink 
                    className={`nav-link external-navlink ${context.theme}`} target="_blank" rel="noreferrer" to="/resume">Resume</NavLink>
                </motion.li>
                <motion.li 
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.4}}
                    onClick={() => props.onCloseMobileMenu}>
                    <NavLink className={`nav-link external-navlink ${context.theme}`}  to="/linkedin" target="_blank" rel="noreferrer">Linkedin</NavLink>
                </motion.li>
                <motion.li 
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.5}}
                    onClick={() => props.onCloseMobileMenu}>
                    <NavLink className={`nav-link external-navlink ${context.theme}`}  to="/github" target="_blank" rel="noreferrer">GitHub</NavLink>
                </motion.li>
            </ul>
    </>)
};

export default NavLinks;