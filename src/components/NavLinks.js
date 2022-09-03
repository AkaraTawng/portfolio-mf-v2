import { NavLink } from "react-router-dom"; 
import { motion } from "framer-motion";
const NavLinks = (props) => {
    const animateFrom = {
        opacity: 0, 
        y: -50
    }
    
    const animateTo = {
        opacity: 1, 
        y: 0
    }

    return (<>
            <ul id="nav-links-container">
                <motion.li 
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.05}}
                    onClick={() => props.onCloseMobileMenu}>
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </motion.li>
                <motion.li 
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.1}}
                    onClick={() => props.onCloseMobileMenu}>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </motion.li>
                <motion.li 
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.2}}
                    onClick={() => props.onCloseMobileMenu}>
                    <NavLink className="nav-link" to="/projects">Projects</NavLink>
                </motion.li>
                <motion.li 
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.3}}
                    onClick={() => props.onCloseMobileMenu}>
                    <NavLink 
                    className="nav-link external-navlink" target="_blank" rel="noreferrer" to="/resume">Resume</NavLink>
                </motion.li>
                <motion.li 
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.4}}
                    onClick={() => props.onCloseMobileMenu}>
                    <NavLink className="nav-link external-navlink" to="/linkedin" target="_blank" rel="noreferrer">Linkedin</NavLink>
                </motion.li>
                <motion.li 
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.5}}
                    onClick={() => props.onCloseMobileMenu}>
                    <NavLink className="nav-link external-navlink" to="/github" target="_blank" rel="noreferrer">GitHub</NavLink>
                </motion.li>
            </ul>
    </>)
};

export default NavLinks;