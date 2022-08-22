import { NavLink } from "react-router-dom"; 
import { motion } from "framer-motion";
const NavLinks = (props) => {
    const animateFrom = {
        opacity: 0, 
        y: -40
    }

    
    console.log("props", props)
    return (<>
            <ul id="nav-links-container">
                <motion.li onClick={() => props.onCloseMobileMenu()}>
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </motion.li>
                <motion.li onClick={() => props.onCloseMobileMenu()}>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </motion.li>
                <motion.li onClick={() => props.onCloseMobileMenu()}>
                    <NavLink className="nav-link" to="/projects">Projects</NavLink>
                </motion.li>
                <motion.li onClick={() => props.onCloseMobileMenu()}>
                    <NavLink className="nav-link external-navlink" target="_blank" rel="noreferrer" to="/resume">Resume</NavLink>
                </motion.li>
                <motion.li onClick={() => props.onCloseMobileMenu()}>
                    <NavLink className="nav-link external-navlink" to="/linkedin" target="_blank" rel="noreferrer">Linkedin</NavLink>
                </li>
                <li onClick={() => props.onCloseMobileMenu()}>
                    <NavLink className="nav-link external-navlink" to="/github" target="_blank" rel="noreferrer">Github</NavLink>
                </li>
            </ul>
    </>)
};

export default NavLinks;