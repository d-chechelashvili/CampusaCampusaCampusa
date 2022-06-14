import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Divider, IconButton, Typography} from "@mui/material";

function SemesterHeader(props) {
    function toRoman(num) {
        const roman = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        };

        let str = '';
        for (let i of Object.keys(roman)) {
            let q = Math.floor(num / roman[i]);
            num -= q * roman[i];
            str += i.repeat(q);
        }
        return str;
    }

    const headerStyle = {
        background: "#2d4d50",
        borderRadius: "3px",
        paddingX: 1,
        width: "96%",
        alignSelf: "center",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    };

    const wrappingBoxStyle = {
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
    };

    const iconButtonStyle = {
        display: "flex",
        marginLeft: "auto",
        color: "rgba(255,12,12,0.7)",
    };

    const dividerStyle = {
        marginX: 0.5,
        background: "#ccc",
        width: "0.5px"
    };

    props.credits = 34; //TODO DELETE THIS
    props.GPA = 2.4; //TODO DELETE THIS
    const semesterNumber = toRoman(props.semesterNumber);

    return (
        <Box sx={headerStyle}>
            <Box sx={wrappingBoxStyle}>
                <Typography color="white" fontSize="0.825rem">CDT: {props.credits}</Typography>
                <Divider sx={dividerStyle} orientation="vertical" flexItem/>
                <Typography color="white" fontSize="0.825rem">GPA: {props.GPA}</Typography>
            </Box>
            <Typography justifySelf="center" color="white" fontSize="1.2rem">სემესტრი {semesterNumber}</Typography>
            <IconButton onClick={props.onDeleteClicked} size="small" sx={iconButtonStyle}>
                <DeleteIcon fontSize="small"/>
            </IconButton>
        </Box>
    );
}

export default SemesterHeader;