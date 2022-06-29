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
const clientID = "912526093783-9kth2rcog3o9rlu2ag9pec6r35fhjadg.apps.googleusercontent.com"
console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID)
root.render(
    <React.StrictMode>
        <CssBaseline/>
        <AuthContextProvider>
            <GoogleOAuthProvider clientId={clientID}>
                <Provider store={store}>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </Provider>
            </GoogleOAuthProvider>
        </AuthContextProvider>
    </React.StrictMode>
);