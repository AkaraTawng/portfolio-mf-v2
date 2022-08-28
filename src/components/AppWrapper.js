import App from "../App.js";
import {BrowserRouter} from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
export default function AppWrapper() {
    return (<>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
</>)}