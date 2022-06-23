import React from 'react';

import ClearIcon from '@mui/icons-material/Clear';
import {Box, Divider, IconButton, TextField, Typography} from "@mui/material";

function Subject(props) {
    const [grade, setGrade] = React.useState(props.grade);
    const [isClicked, setIsClicked] = React.useState(false);

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

    // const subjectBoxStyle = {
    //     // background: "radial-gradient(#e3f2fd 70%, #000000 30%, #3f51b5 0%)",
    //     // background: "radial-gradient(rgb(222, 247, 254) 55%, rgb(195, 245, 253) 92%, rgb(83, 109, 254) 100000%)",
    //     // background: "radial-gradient(rgb(190, 220, 225) 13%, rgb(76, 161, 175) 164%)",
    //     // background: "radial-gradient(#9CECFB, #65C7F7, #0052D4)",
    //     // radial-gradient(circle at 50%, rgb(230, 253, 255) 15%, rgb(225, 252, 253) 20%, rgb(210, 250, 254) 30%, rgb(200, 250, 254) 40%, rgb(157, 236, 251) 72%, rgb(101, 199, 247) 93%, rgb(0, 82, 212) 124%)        // backgroundImage: "radial-gradient(#e3f2fd 0%, transparent 70%, #3f51b5 95%)",
    //     // borderRadius: "6px",
    // };

    const dividerStyle = {
        marginX: 0.5,
    };

    const grades = ["?", "A", "B", "C", "D", "E", "F"];

    const handleChange = (event) => {
        setGrade(event.target.value);
        props.onGradeChange(props.name, event.target.value);
    };

    const handleDelete = () => {
        props.onDeleteClicked(props.name);
    };

    const iconButtonStyle = {
        marginLeft: 0,
        color: "rgba(255,12,12,0.7)",
        display: {
            xs: "initial",
            sm: isClicked ? "initial" : "none",
        }
    };

    const hiddenIconButtonStyle = {
        marginRight: 0,
        visibility: "hidden",
        display: {
            xs: "initial",
            sm: isClicked ? "initial" : "none",
        }
    };

    const handleClick = () => {
        setIsClicked((prevState) => !prevState);
    };

    return (
        <Box sx={wrapperBoxStyle} onClick={handleClick}>
            <IconButton size="small" sx={hiddenIconButtonStyle}>
                <ClearIcon fontSize="small"/>
            </IconButton>
            <Box width="93%">
                <Typography fontSize="0.9rem" alignSelf="center" variant="h4"
                            sx={{float: "left", marginRight: 0.5, "&:hover": {cursor: "default"}}}>
                    {props.name}
                </Typography>
                <Box display="flex" justifyContent="flex-end" alignItems="center"
                     sx={{marginLeft: "auto", float: "right", "&:hover": {cursor: "default"}}}>
                    <Typography marginRight={0} fontSize="0.85rem" variant="h6">
                        კრედიტი: {props.credits}</Typography>
                    <Divider sx={dividerStyle} orientation="vertical" flexItem/>
                    <Typography fontSize="0.85rem" variant="h6">{"ნიშანი: "}</Typography>
                    <TextField
                        id="grade-select-native"
                        sx={{marginLeft: 0.4}}
                        hiddenLabel
                        select
                        value={grade}
                        onChange={handleChange}
                        onClick={(e) => e.stopPropagation()}
                        SelectProps={{
                            native: true,
                            sx: {fontSize: "0.84rem", textAlignLast: "right"},
                            size: "small",
                        }}
                        variant="standard"
                        size="small"
                    >
                        {grades.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </TextField>
                </Box>
            </Box>
            <IconButton onClick={handleDelete} size="small" sx={iconButtonStyle}>
                <ClearIcon fontSize="small"/>
            </IconButton>
        </Box>
    );
}

export default Subject;