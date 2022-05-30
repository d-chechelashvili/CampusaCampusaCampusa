import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <CssBaseline/>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);