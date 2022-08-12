import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav.js";
import Contact from "./components/Contact.js";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
export default function App() {
  return<>
    <Nav/>
    <Routes>
      <Route path="/contact" element={<Contact/>}>
        
      </Route>
    </Routes>
</>
};
