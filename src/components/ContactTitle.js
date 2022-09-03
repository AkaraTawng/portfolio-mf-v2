import AnimatedTitle from "./AnimatedTitle";
import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.js";

export default function ContactTitle() {
    const context = useContext(ThemeContext);

    return <>
    <AnimatedTitle>
            <h1 id="contact-title" className={context.theme}>Contact</h1>
    </AnimatedTitle>
    </>
};