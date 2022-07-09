import {useContext} from "react";

import {AppBar, Toolbar} from "@mui/material";

import Logo from "./logo/Logo";
import UserMenu from "./user_menu/UserMenu";
import AuthContext from "../../store/auth-context";


const MainHeader = () => {
    const authContext = useContext(AuthContext);
    const isLoggedIn = authContext.isLoggedIn;

    const handleLogout = () => {
        authContext.logout();
    };

    const appBarStyle = {
        background: "#008080",
        position: "sticky",
    };

    const toolBarStyle = {
        height: "4.35rem",
    };

    return (
        <AppBar sx={appBarStyle} elevation={0}>
            <Toolbar sx={toolBarStyle}>
                <Logo/>
                {isLoggedIn && <UserMenu onLogout={handleLogout}/>}
            </Toolbar>
        </AppBar>
    )
};

export default MainHeader;