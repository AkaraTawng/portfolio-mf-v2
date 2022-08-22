import NavLinks from "./NavLinks.js";
import { CgMenuMotion } from "react-icons/cg";
import { useState } from "react";
const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="mobile-nav">
            <CgMenuMotion className="hamburger" onClick={() => setIsOpen(!isOpen)}/>
            {isOpen && <NavLinks />}
        </nav>
    );
}

export default MobileNav;