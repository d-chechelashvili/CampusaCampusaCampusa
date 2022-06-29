import {useState} from "react";

import {Box, Divider, TextField, Typography} from "@mui/material";

function SubjectInfo(props) {
    const [grade, setGrade] = useState(props.grade);
    const grades = ["?", "A", "B", "C", "D", "E", "F"];

    const handleChange = (event) => {
        setGrade(event.target.value);
        props.onGradeChange(props.name, event.target.value);
    };

    const dividerStyle = {
        marginX: 0.5,
    };

    const selectProps = {
        native: true,
        sx: {fontSize: "0.84rem", textAlignLast: "right"},
        size: "small",
    };

    return (
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
                    hiddenLabel select
                    value={grade}
                    onChange={handleChange}
                    onClick={(e) => e.stopPropagation()}
                    SelectProps={selectProps}
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

export default SubjectInfo;