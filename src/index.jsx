import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import ThemeProvider from './components/providers/ThemeProvider';
import { BrowserRouter } from "react-router-dom"

import "./index.scss";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <Root />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
