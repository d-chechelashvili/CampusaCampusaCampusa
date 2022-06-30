import {Link as RouterLink} from "react-router-dom";

import {Box, Link, Typography} from "@mui/material";

function Logo(props) {
    const linkStyle = {
        textDecoration: "none",
        color: "white",
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="center">
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
    );
}

export default Logo;