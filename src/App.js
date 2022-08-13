import {Routes, Route} from "react-router-dom";
import Nav from "./components/Nav.js";
import Contact from "./components/Contact.js";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import RedirectPage from "./components/RedirectPage.js";
export default function App() {
  return<>
    <Nav/>
    <Routes>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/home" element={<Home/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/linkedin" element={<RedirectPage/>} />
      <Route path="/github" element={<RedirectPage/>} />
    </Routes>
</>
};
