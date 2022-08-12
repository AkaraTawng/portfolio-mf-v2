import App from "../App.js";
import {BrowserRouter} from "react-router-dom";
export default function AppWrapper() {
    return <BrowserRouter>
        <App/>
    </BrowserRouter>
}