import React from "react";
import {Route, Switch} from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import SubjectPage from "./pages/SubjectPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/subject/:subjectId" component={SubjectPage} />
            <Route component={NotFoundPage} />
        </Switch>
    )
}

export default App;
