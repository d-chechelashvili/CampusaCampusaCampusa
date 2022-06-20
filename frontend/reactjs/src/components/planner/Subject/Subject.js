import React from 'react';

import {Box, Divider, TextField, Typography} from "@mui/material";

function Subject(props) {
    const [grade, setGrade] = React.useState(props.grade);

    const boxStyle = {
        paddingX: "2%",
        paddingY: 0.5,
        width: "93%",
        alignSelf: "center",
        // background: "radial-gradient(#e3f2fd 70%, #000000 30%, #3f51b5 0%)",
        // background: "radial-gradient(rgb(222, 247, 254) 55%, rgb(195, 245, 253) 92%, rgb(83, 109, 254) 100000%)",
        // background: "radial-gradient(rgb(190, 220, 225) 13%, rgb(76, 161, 175) 164%)",
        // background: "radial-gradient(#9CECFB, #65C7F7, #0052D4)",
        // radial-gradient(circle at 50%, rgb(230, 253, 255) 15%, rgb(225, 252, 253) 20%, rgb(210, 250, 254) 30%, rgb(200, 250, 254) 40%, rgb(157, 236, 251) 72%, rgb(101, 199, 247) 93%, rgb(0, 82, 212) 124%)        // backgroundImage: "radial-gradient(#e3f2fd 0%, transparent 70%, #3f51b5 95%)",
        // borderRadius: "6px",
    };

    const dividerStyle = {
        marginX: 0.5,
    };

    const grades = ["?", "A", "B", "C", "D", "E", "F"];


    const handleChange = (event) => {
        setGrade(event.target.value);
        props.onGradeChange(props.name, event.target.value);
    };

    return (
        <Box display="flex" sx={boxStyle}>
            <Typography alignSelf="center" sx={{float: "left"}} fontSize="0.9rem" variant="h4">{props.name}</Typography>
            <Box display="flex" alignItems="center" sx={{marginLeft: "auto"}}>
                <Typography fontSize="0.85rem" variant="h6">კრედიტი: {props.credits}</Typography>
                <Divider sx={dividerStyle} orientation="vertical" flexItem/>
                <Typography fontSize="0.85rem" variant="h6">{"ნიშანი: "}</Typography>
                <TextField
                    id="grade-select-native"
                    sx={{textAlignLast: "center", marginLeft: 0.4}}
                    select
                    value={grade}
                    onChange={handleChange}
                    SelectProps={{
                        native: true,
                        fontSize: "0.5rem",
                        size: "small",
                    }}
                    fontSize="0.5rem"
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
    );
}

export default Subject;