import React from 'react';
import {Box, Divider, Typography} from "@mui/material";

function Subject(props) {
    const boxStyle = {
        width: "90%",
        alignSelf: "center",
    };

    const dividerStyle = {
        marginX: 0.5,
    };

    return (
        <Box sx={boxStyle}>
            <Typography sx={{float: "left"}} fontSize="0.88rem" variant="h4">{props.name}</Typography>
            <Box display="flex" sx={{float: "right"}}>
                <Typography fontSize="0.8rem" variant="h6">კრედიტი: {props.credits}</Typography>
                <Divider sx={dividerStyle} orientation="vertical" flexItem/>
                <Typography fontSize="0.8rem" variant="h6">ნიშანი: {props.grade}</Typography>
            </Box>
        </Box>
    );
}

export default Subject;