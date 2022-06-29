import {useContext} from "react";

import jwt_decode from "jwt-decode";

import {AppBar, Toolbar} from "@mui/material";

import Logo from "./logo/Logo";
import UserMenu from "./user_menu/UserMenu";
import AuthContext from "../../store/auth-context";


const MainHeader = () => {
    const authContext = useContext(AuthContext);
    const isLoggedIn = authContext.isLoggedIn;
    let pictureUrl;
    if (isLoggedIn) {
        const decoded = jwt_decode(authContext.token);
        pictureUrl = decoded.picture;
    }

    const handleLogout = () => {
        authContext.logout();
    };

    const appBarStyle = {
        background: "#008080",
        position: "sticky",
    };

    const toolBarStyle = {
        height: "5rem",
    };

    return (
        <AppBar sx={appBarStyle} elevation={0}>
            <Toolbar sx={toolBarStyle}>
                <Logo/>
                {isLoggedIn && <UserMenu pictureUrl={pictureUrl} onLogout={handleLogout}/>}
            </Toolbar>
        </AppBar>
    )
};

export default MainHeader;