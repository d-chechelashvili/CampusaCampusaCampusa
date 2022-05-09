import React from "react";
import {Route, Switch} from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import SubjectPage from "./pages/SubjectPage";

function App() {
    return (
        <Switch>
            <Route path="/subjects/:subjectName">
                <SubjectPage/>
            </Route>
            <Route path="/">
                <HomePage/>
            </Route>
        </Switch>
    )
}

export default App;
