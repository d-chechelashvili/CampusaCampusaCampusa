import {useState} from "react";

import {Box, IconButton} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

import SubjectInfo from "./SubjectInfo";

function Subject(props) {
    const [isClicked, setIsClicked] = useState(false);

    const handleDelete = () => {
        props.onDeleteClicked(props.name);
    };

    const handleClick = () => {
        setIsClicked((prevState) => !prevState);
    };

    const wrapperBoxStyle = {
        paddingX: "2%",
        paddingY: 0.5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
            cursor: "pointer",
        },
    };

    const iconButtonStyle = {
        marginLeft: 0,
        color: "rgba(255,12,12,0.7)",
        display: {
            xs: "initial",
            sm: isClicked ? "initial" : "none",
        },
    };

    const hiddenIconButtonStyle = {
        marginRight: 0,
        visibility: "hidden",
        display: {
            xs: "initial",
            sm: isClicked ? "initial" : "none",
        },
    };

    return (
        <Box sx={wrapperBoxStyle} onClick={handleClick}>
            <IconButton size="small" sx={hiddenIconButtonStyle}>
                <ClearIcon fontSize="small"/>
            </IconButton>
            <SubjectInfo name={props.name} credits={props.credits}
                         onGradeChange={props.onGradeChange} grade={props.grade}/>
            <IconButton onClick={handleDelete} size="small" sx={iconButtonStyle}>
                <ClearIcon fontSize="small"/>
            </IconButton>
        </Box>
    );
}

export default Subject;