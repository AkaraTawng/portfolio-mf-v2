import { Link } from "react-router-dom";
export default function Footer() {
    return <>
        <div id="footer-wrapper">
             <div id="sitemap-contact-flex-container">   
                <section id="sitemap">
                    <h2>Sitemap</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/resume" target="_blank">Resume</Link></li>
                        <li><Link to="/linkedin" target="_blank">Linkedin</Link></li>
                        <li><Link to="/github" target="_blank">GitHub</Link></li>
                    </ul>
                </section>

                <section id="contact">
                    <h2>Contact</h2>
                    <ul>
                        <li>
                            <span>Phone: </span>+856 020-983-09152
                        </li>
                        <li>
                            <span>Email: </span>c.r.chamberlain1997@gmail.com
                        </li>
                    </ul>
                </section>
            </div>
            <p id="copyright">&copy; Christopher Chamberlain</p>
        </div>
    </>
}
