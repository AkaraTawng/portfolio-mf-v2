import { NavLink } from "react-router-dom"; 
const NavLinks = (props) => {
    console.log("props", props)
    return (<>
            <ul id="nav-links-container">
                <li>
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link external-navlink" target="_blank" rel="noreferrer" to="/resume">Resume</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link external-navlink" to="/linkedin" target="_blank" rel="noreferrer">Linkedin</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link external-navlink" to="/github" target="_blank" rel="noreferrer">Github</NavLink>
                </li>
            </ul>
    </>)
};

export default NavLinks;