import { NavLink } from "react-router-dom"; 
const NavLinks = () => {
    return (<>
            <ul id="nav-links-container">
                <li>
                    <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" activeClassName="active" to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" activeClassName="active" target="_blank" rel="noreferrer" to="/resume">Resume</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/linkedin" target="_blank" rel="noreferrer" activeClassName="active">Linkedin</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/github" target="_blank" rel="noreferrer" activeClassName="active">Github</NavLink>
                </li>
            </ul>
    </>)
};

export default NavLinks;