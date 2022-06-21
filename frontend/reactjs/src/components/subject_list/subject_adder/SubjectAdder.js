import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {semesterActions} from "../../../store/redux-store";
import {Box, Button, TextField, Typography} from "@mui/material";


function SubjectAdder(props) {
    const dispatch = useDispatch();
    const semesterList = useSelector((state) => state.semesterList);
    const [semesterNumber, setSemesterNumber] = React.useState(1);

    const handleChange = (event) => {
        setSemesterNumber(event.target.value);
    };

    const subjectName = props.subjectName;
    const credits = props.subjectCredits;

    const addSubject = (e) => {
        dispatch(semesterActions.addSubject({semesterNumber, subjectName, credits}));
    };

    const semesters = [1, 2, 3];

    const boxStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingTop: 1.1,
        paddingX: 0.75,
        "&:hover": {
            cursor: "default",
        }
    };

    return (
        <Box sx={boxStyle} onClick={(e) => e.preventDefault()}>
            <Box display="flex">
                <Typography>სემესტრი: </Typography>
                <TextField
                    id="semester-select-native"
                    hiddenLabel
                    select
                    value={semesterNumber}
                    onChange={handleChange}
                    sx={{marginLeft: 0.4}}
                    SelectProps={{
                        native: true,
                        sx: {fontSize: "0.86rem", textAlignLast: "right"},
                        size: "small",
                    }}
                    variant="standard"
                    size="small"
                >
                    {semesters.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </TextField>
            </Box>
            <Button
                size="small"
                variant="contained"
                onClick={addSubject}
                sx={{
                    fontSize: "0.85rem",
                    background: "#0277bd",
                }}>
                დამგეგმავში დამატება
            </Button>
        </Box>
    );
}

export default SubjectAdder;