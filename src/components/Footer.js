import { Link } from "react-router-dom";
import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.js";
export default function Footer() {
    const context = useContext(ThemeContext);
    return <>
        <div id="footer-wrapper" className={context.theme}>
             <div id="sitemap-contact-flex-container">   
                <section id="sitemap">
                    <h2>Sitemap</h2>
                    <ul>
                        <li><Link className="footer-link" to="/">Home</Link></li>
                        <li><Link className="footer-link" to="/projects">Projects</Link></li>
                        <li><Link className="footer-link" to="/contact">Contact</Link></li>
                        <li><Link className="footer-link" to="/resume" target="_blank">Resume</Link></li>
                        <li><Link className="footer-link" to="/linkedin" target="_blank">Linkedin</Link></li>
                        <li><Link className="footer-link" to="/github" target="_blank">GitHub</Link></li>
                    </ul>
                </section>

                <section id="contact" className={context.theme}>
                    <h2>Contact</h2>
                    <ul>
                        <li>
                           <span>Phone: </span><a className="footer-contact-link" href="tel:+85602098309152">+856 020-983-09152</a>
                        </li>
                        <li>
                            <span>Email: </span><a className="footer-contact-link" href="mailto:c.r.chamberlain1997@gmail.com">c.r.chamberlain1997@gmail.com</a>
                        </li>
                    </ul>
                </section>
            </div>
            <p className={context.theme} id="copyright">&copy; Christopher Chamberlain 2022</p>
        </div>
    </>
}
