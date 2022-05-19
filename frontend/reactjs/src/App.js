import React from "react";
import {Route, Switch} from "react-router-dom";

import HomePage from "./pages/HomePage";
import SubjectPage from "./pages/SubjectPage";
import Layout from "./components/layout/Layout";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/subjects/:subjectId" component={SubjectPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </Layout>
    );
}

export default App;
