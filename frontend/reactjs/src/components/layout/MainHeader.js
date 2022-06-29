import {useContext, useState} from "react";
import {Link as RouterLink} from "react-router-dom";

import jwt_decode from "jwt-decode";

import {AppBar, Avatar, Box, IconButton, Link, Menu, MenuItem, Toolbar, Tooltip, Typography} from "@mui/material";

import AuthContext from "../../store/auth-context";


const MainHeader = () => {
    const authContext = useContext(AuthContext);
    const isLoggedIn = authContext.isLoggedIn;
    let pictureUrl;
    if (isLoggedIn) {
        const decoded = jwt_decode(authContext.token);
        pictureUrl = decoded.picture;
    }
    console.log(pictureUrl);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

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

    const handleLogout = () => {
        authContext.logout();
    };

    return (
        <AppBar sx={appBarStyle} elevation={0}>
            <Toolbar sx={toolBarStyle}>
                <Box display="flex" alignItems="center" justifyContent="center" marginRight={1}>
                    <Link sx={linkStyle} component={RouterLink} to="/">
                        <Typography sx={{color: "#fce803"}} fontSize="2rem">კამპუსა</Typography>
                    </Link>
                    <Link sx={linkStyle} component={RouterLink} to="/">
                        <Typography sx={{color: "#03fc2c"}} fontSize="2rem">კამპუსა</Typography>
                    </Link>
                    <Link sx={linkStyle} component={RouterLink} to="/">
                        <Typography sx={{color: "#fcc203"}} fontSize="2rem">კამპუსა</Typography>
                    </Link>
                </Box>
                {isLoggedIn && <Box sx={{flexGrow: 0, marginLeft: "auto"}}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                            <Avatar src={pictureUrl} imgProps={{referrerPolicy: "no-referrer"}}/>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{mt: '45px'}}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        <MenuItem key="logout" onClick={handleCloseUserMenu}>
                            <Typography onClick={handleLogout} textAlign="center">Logout</Typography>
                        </MenuItem>
                    </Menu>
                </Box>}
            </Toolbar>
        </AppBar>
    )
};

export default MainHeader;