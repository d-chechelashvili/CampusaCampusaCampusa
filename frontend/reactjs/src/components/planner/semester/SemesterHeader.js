import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Divider, IconButton, Typography} from "@mui/material";

import {convertNumToRoman} from "../../../lib/utils";


function SemesterHeader(props) {
    const semesterNumber = convertNumToRoman(props.semesterNumber);

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
        width: "0.5px",
    };

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