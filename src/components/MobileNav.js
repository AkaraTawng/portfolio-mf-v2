import NavLinks from "./NavLinks.js";
import { CgMenuMotion } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.js";
const MobileNav = () => {
    const context = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    const hamburgerIcon = <CgMenuMotion className={`hamburger ${context.theme}`} onClick={() => setIsOpen(!isOpen)}/>;
    const closeHamburgerIcon = <CgClose className={`close-hamburger ${context.theme}`} onClick={() => setIsOpen(!isOpen)}/>;
    const handleCloseMobileMenu = () => setIsOpen(false); 
    return (
        <nav className="mobile-nav">
            {isOpen ? closeHamburgerIcon : hamburgerIcon}
            {isOpen && <NavLinks  onCloseMobileMenu={handleCloseMobileMenu}/>}
        </nav>
    );
}

export default MobileNav;