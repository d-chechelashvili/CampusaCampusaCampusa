import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SubjectPage from "./pages/SubjectPage";
import AuthContext from "./store/auth-context";
import Layout from "./components/layout/Layout";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    const authContext = React.useContext(AuthContext);
    const isLoggedIn = authContext.isLoggedIn;
    return (
        <Switch>
            <Route exact path="/sign-in" component={SignInPage}/>
            <Layout>
                <Route exact path="/">
                    {isLoggedIn ? <HomePage/> : <Redirect to="/sign-in"/>}
                </Route>
                <Route path="/subjects/:subjectId">
                    {isLoggedIn ? <SubjectPage/> : <Redirect to="/sign-in"/>}
                </Route>
                <Route path="*" component={NotFoundPage}/>
            </Layout>
        </Switch>
    );
}

export default App;
