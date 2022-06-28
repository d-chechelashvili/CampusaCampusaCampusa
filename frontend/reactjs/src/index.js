import React from "react";
import {Provider} from "react-redux";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from 'react-router-dom';
import {GoogleOAuthProvider} from '@react-oauth/google';

import CssBaseline from '@mui/material/CssBaseline';

import "./index.css";
import App from "./App";
import store from "./store/redux-store";
import {AuthContextProvider} from "./store/auth-context";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <CssBaseline/>
        <AuthContextProvider>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
                <Provider store={store}>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </Provider>
            </GoogleOAuthProvider>
        </AuthContextProvider>
    </React.StrictMode>
);