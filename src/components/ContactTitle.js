import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.js";
export default function ContactTitle() {
    const context = useContext(ThemeContext);
    return <h1 className={context.theme} id="contact-title">Contact</h1>;
};