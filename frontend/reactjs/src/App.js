import {useContext} from "react";
import {Redirect, Route, Switch, useHistory, useLocation} from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SubjectPage from "./pages/SubjectPage";
import AuthContext from "./store/auth-context";
import Layout from "./components/layout/Layout";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    const authContext = useContext(AuthContext);
    const isLoggedIn = authContext.isLoggedIn;
    const history = useHistory();
    const location = useLocation();
    
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
                <Route path="/subjects/:subjectId">
                    {isLoggedIn ? <SubjectPage/> : <Redirect to="/sign-in"/>}
                </Route>
                <Route component={NotFoundPage}/>
            </Switch>
        </Layout>
    );
}

export default App;
