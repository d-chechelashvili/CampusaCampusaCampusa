import {useContext} from "react";
import {Redirect, Route, Switch, useHistory, useLocation} from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SubjectPage from "./pages/SubjectPage";
import AuthContext from "./store/auth-context";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/layout/Layout";

function App() {
    const history = useHistory();
    const location = useLocation();
    const authContext = useContext(AuthContext);

    const isLoggedIn = authContext.isLoggedIn;

    if (!isLoggedIn && (location.pathname === "/" || location.pathname.startsWith("/subjects/"))) {
        history.push(location);
    }

    return (
        <Layout>
            <Switch>
                {!isLoggedIn && <Route exact path="/sign-in" component={SignInPage}/>}
                <Route exact path="/">
                    {isLoggedIn ? <HomePage/> : <Redirect to="/sign-in"/>}
                </Route>
                <Route path="/subjects/:subjectName">
                    {isLoggedIn ? <SubjectPage/> : <Redirect to="/sign-in"/>}
                </Route>
                <Route component={NotFoundPage}/>
            </Switch>
        </Layout>
    );
}

export default App;
