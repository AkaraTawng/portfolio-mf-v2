import NavLinks from "./NavLinks.js";
import { CgMenuMotion } from "react-icons/cg";
const MobileNav = () => {
    return (
        <nav className="mobile-nav">
            <CgMenuRound className="hamburger"/>
            <NavLinks />
        </nav>
    );
}

export default MobileNav;