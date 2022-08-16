import "../src/main.css";

//router
import { Routes, Route } from "react-router-dom";

import {useState} from 'react';

//components
import Nav from "./components/Nav.js";
import Contact from "./components/Contact.js";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import RedirectPage from "./components/RedirectPage.js";
import Loader from "./components/Loader";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  return<>
  {isLoading ? <Loader/> : <Nav/>}
    <Routes>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/home" element={<Home/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/resume" element={<RedirectPage/>} />
      <Route path="/linkedin" element={<RedirectPage setIsLoading={setIsLoading}/>} />
      <Route path="/github" element={<RedirectPage setIsLoading={setIsLoading}/>} />
    </Routes>
</>
};
