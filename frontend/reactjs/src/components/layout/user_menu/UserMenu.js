import {useState} from 'react';

import {Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography} from "@mui/material";

function UserMenu(props) {
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{flexGrow: 0, marginLeft: "auto"}}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                    <Avatar src={props.pictureUrl} imgProps={{referrerPolicy: "no-referrer"}}/>
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
                    <Typography onClick={props.onLogout} textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
}

export default UserMenu;