import { Link } from "react-router-dom";
export default function Footer() {
    return <>
        <div id="footer-wrapper">
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
            <p id="copyright">&copy; Christopher Chamberlain 2022</p>
        </div>
    </>
}
