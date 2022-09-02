import "../src/main.css";

//router
import { Routes, Route, useLocation } from "react-router-dom";

import {useState} from 'react';


//components
import Nav from "./components/Nav.js";
import Contact from "./components/Contact.js";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import RedirectPage from "./components/RedirectPage.js";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";


export default function App() {
  /* refactor loading state to context for resuse */
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  return<>
      {isLoading ? <Loader/> : <Header/>}
        
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/resume" element={<RedirectPage setIsLoading={setIsLoading}/>} />
            <Route path="/linkedin" element={<RedirectPage setIsLoading={setIsLoading}/>} />
            <Route path="/github" element={<RedirectPage setIsLoading={setIsLoading}/>} />
          </Routes>
        </AnimatePresence>
      <Footer/>
</>
};
