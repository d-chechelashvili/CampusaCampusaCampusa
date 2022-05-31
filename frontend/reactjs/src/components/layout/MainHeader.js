import {Link as RouterLink} from "react-router-dom";

import {AppBar, Link, Toolbar, Typography} from "@mui/material";

const MainHeader = () => {
    const appBarStyle = {
        background: "#008080",
        position: "sticky",
    };

    const toolBarStyle = {
        height: "5rem",
    };

    const linkStyle = {
        textDecoration: "none",
        color: "white",
    };

    return (
        <AppBar sx={appBarStyle} elevation={0}>
            <Toolbar sx={toolBarStyle}>
                <Link sx={linkStyle} component={RouterLink} to="/">
                    <Typography fontSize="2rem">CampusaCampusaCampusa</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
};

export default MainHeader;