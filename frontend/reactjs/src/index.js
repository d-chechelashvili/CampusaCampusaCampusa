import React from "react";
import {Provider} from "react-redux";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import "./index.css";
import App from "./App";
import store from "./store/redux-store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <CssBaseline/>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);