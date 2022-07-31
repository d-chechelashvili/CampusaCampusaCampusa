import {useContext, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Alert, Box, Button, TextField, Typography} from "@mui/material";

import AuthContext from "../../../store/auth-context";
import * as PlannerAPI from "../../../lib/api/PlannerAPI";
import {semesterActions} from "../../../store/redux-store";


function SubjectAdder(props) {
    const dispatch = useDispatch();
    const authContext = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [semesterNumber, setSemesterNumber] = useState(null);
    const [errorTimeoutId, setErrorTimeoutId] = useState(null);
    const semesterList = useSelector((state) => state.semesterList);

    const handleChange = (event) => {
        setSemesterNumber(event.target.value);
    };

    const year = props.subjectYear;
    const credits = props.subjectCredits;
    const subjectName = props.subjectName;
    const semester = props.subjectSemester;

    const validSubject = () => {
        console.log("semester:", semesterNumber);
        console.log("semesterList:", semesterList);
        if (semesterNumber === null || semesterList.length === 0) {
            setError("შესაბამისი სემესტრი ვერ მოიძებნა");
            return false;
        }
        for (let i = 0; i < semesterList.length; i++) {
            for (const subject of semesterList[i].subjects) {
                if (subject.name === subjectName) {
                    if (i === semesterNumber - 1) {
                        setError("ამ სემესტრში ეს საგანი უკვე დამატებულია")
                        return false;
                    } else if (subject.grade !== "F") {
                        setError("საგანი სხვა სემესტრში უკვე ჩაბარებულია")
                        return false;
                    }
                }
            }
        }
        return true;
    };

    const addSubject = () => {
        if (validSubject()) {
            console.log(semesterList);
            console.log(semesterNumber);
            PlannerAPI.addSubject(authContext.token, subjectName, semesterNumber)
            dispatch(semesterActions.addSubject({semesterNumber, subjectName, credits}));
        } else {
            clearTimeout(errorTimeoutId);
            const id = setTimeout(() => {
                setError(null)
            }, 3000);
            setErrorTimeoutId(id);
        }
    };

    const semesters = semesterList.map((semester, index) => {
        return index + 1;
    });

    const filteredSemesters = semesters.filter((semesterNum) => {
        const minSemester = (year - 1) * 2;
        if (semesterNum < minSemester) {
            return false;
        }
        switch (semester) {
            case "SPRING":
                return semesterNum % 2 === 0;
            case "FALL":
                return semesterNum % 2 === 1;
            default:
                return true;
        }
    });

    if (semesterNumber === null && filteredSemesters.length > 0) {
        setSemesterNumber(filteredSemesters[0]);
    }

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
        <Box onClick={(e) => e.preventDefault()}>
            <Box sx={boxStyle}>
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
                        {filteredSemesters.map((option) => (
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
            {error &&
                <Alert onClick={() => setError(null)}
                       onClose={() => {
                       }}
                       sx={{marginTop: 0.5}} severity="error">{error}</Alert>
            }
        </Box>
    );
}

export default SubjectAdder;