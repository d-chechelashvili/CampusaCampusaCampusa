import {useContext} from "react";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SubjectPage from "./pages/SubjectPage";
import AuthContext from "./store/auth-context";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/layout/Layout";

function App() {
    const location = useLocation();
    const authContext = useContext(AuthContext);

    const isLoggedIn = authContext.isLoggedIn;

    return (
        <Layout>
            <Routes>
                {!isLoggedIn && <Route exact path="/sign-in" element={<SignInPage/>}/>}
                <Route path="/"
                       element={isLoggedIn ? <HomePage/> : <Navigate to="/sign-in"/>}/>
                <Route path="/subjects/:subjectName"
                       element={isLoggedIn ? <SubjectPage/> :
                           <Navigate to="/sign-in" replace state={{from: location}}/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
