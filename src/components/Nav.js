import {NavLink} from "react-router-dom";

export default function Nav(){
    return <p id="nav-placeholder">Nav placeholder</p>
    return <>
        <div id="nav-wrapper">
            <nav id="nav-links-container">
                <ul>
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
                        <NavLink className="nav-link" to="/linkedin" target="_blank" rel="noreferrer">Linkedin</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/github" target="_blank" rel="noreferrer">Github</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </>}