import {useContext, useEffect, useState} from 'react';

import {Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography} from "@mui/material";

import {getImageFromToken} from "../../../lib/api";
import AuthContext from "../../../store/auth-context";

function UserMenu(props) {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [pictureUrl, setPictureUrl] = useState(null);
    const authContext = useContext(AuthContext);


    useEffect(() => {
        getImageFromToken(authContext.token).then((imageUrl) => {
            setPictureUrl(imageUrl);
        });
    }, [authContext, setPictureUrl]);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{flexGrow: 0, marginLeft: "auto", paddingLeft: 1}}>
            <Tooltip title={Boolean(anchorElUser) ? '' : 'Open Settings'}>
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
                    <Typography onClick={props.onLogout} textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
}

export default UserMenu;