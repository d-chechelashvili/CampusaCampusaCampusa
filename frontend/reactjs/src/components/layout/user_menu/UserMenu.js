import {useContext, useState} from 'react';

import {Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography} from "@mui/material";

import AuthContext from "../../../store/auth-context";

function UserMenu(props) {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const authContext = useContext(AuthContext);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{flexGrow: 0, marginLeft: "auto", paddingLeft: 1}}>
            <Tooltip title={Boolean(anchorElUser) ? '' : 'მენიუს გახსნა'}>
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                    <Avatar src={authContext.pictureURL} imgProps={{referrerPolicy: "no-referrer"}}/>
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
                disableScrollLock
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem key="logout" onClick={handleCloseUserMenu}>
                    <Typography onClick={props.onLogout} textAlign="center">გამოსვლა</Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
}

export default UserMenu;