import {Box, Typography} from "@mui/material";

function Planner() {
    const boxStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #000000',
        borderRadius: '4px',
        marginY: "8px",
        marginLeft: "8px",
        height: 'calc(100% - 16px)',
    };

    return (
        <Box sx={boxStyle}>
            <Typography variant="h1" align="center">Planner</Typography>
        </Box>
    );
}

export default Planner;