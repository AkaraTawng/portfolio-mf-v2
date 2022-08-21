import NavLinks from "./NavLinks.js";
import { CgMenuMotion } from "react-icons/cg";
const MobileNav = () => {
    return (
        <nav className="mobile-nav">
            <CgMenuMotion className="hamburger   "/>
            <NavLinks />
        </nav>
    );
}

export default MobileNav;