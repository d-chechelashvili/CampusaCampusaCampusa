import {useDispatch, useSelector} from 'react-redux';

import Scrollbars from "react-custom-scrollbars-2";
import {Box, Divider, Stack, Typography} from "@mui/material";

import Semester from "./Semester/Semester";
import SemesterAdder from "./Semester/SemesterAdder";
import {semesterActions} from "../../store/redux-store";


function Planner() {
    // TODO should fetch list from backend
    const dispatch = useDispatch();
    const semesterList = useSelector((state) => state.semesterList);

    const addSemester = () => {
        dispatch(semesterActions.addSemester());
    };

    const removeSemester = (semesterNumber) => {
        dispatch(semesterActions.removeSemester(semesterNumber));
    };

    const changeSubjectGrade = (semesterNumber, subjectName, grade) => {
        dispatch(semesterActions.selectSubjectGrade({semesterNumber, subjectName, grade}));
    };

    const removeSubject = (semesterNumber, subjectName) => {
        dispatch(semesterActions.removeSubject({semesterNumber, subjectName}));
    }

    const boxStyle = {
        border: "1px groove #ccc",
        borderRadius: "4px",
        marginTop: "8px",
        paddingTop: 1,
        marginLeft: {xs: 0, sm: 1, md: 1.5, lg: 2.5},
        marginRight: {xs: 2.5, sm: 0},
        height: "calc(100% - 15px)",
        width: "100%",
    };

    const scrollbarStyle = {
        height: "100%",
    }

    const getSemesterCredits = (subjects) => {
        return subjects.reduce((acc, subject) => acc + subject.credits, 0)
    };

    const totalCredits = semesterList.reduce((acc, semester) =>
        acc + getSemesterCredits(semester.subjects), 0);

    const getSemesterPoints = (subjects) => {
        return subjects.reduce((acc, subject) => {
            if (acc === "?") {
                return "?";
            }

            switch (subject.grade) {
                case "A":
                    return acc + (4 * subject.credits);
                case "B":
                    return acc + (3.38 * subject.credits);
                case "C":
                    return acc + (2.77 * subject.credits);
                case "D":
                    return acc + (2.16 * subject.credits);
                case "E":
                    return acc + (1.55 * subject.credits);
                case "F":
                    return acc;
                default:
                    return "?";
            }
        }, 0);
    }

    const totalPoints = semesterList.reduce((acc, semester) => {
        const currSemesterPoints = getSemesterPoints(semester.subjects);
        if (acc === "?" || currSemesterPoints === "?") {
            return "?";
        }

        return acc + currSemesterPoints;
    }, 0);


    let GPA = totalPoints === "?" ? "?" : +(Math.round(totalPoints / totalCredits + "e+2") + "e-2");
    if (!GPA) {
        GPA = 0.0;
    }
    if (Number.isInteger(GPA)) {
        GPA = GPA.toFixed(2);
    }

    return (
        <Box sx={boxStyle}>
            <Box height="93.5%">
                <Scrollbars autoHide style={scrollbarStyle}>
                    <Stack spacing={2}>
                        {semesterList.map((semester, index) => {
                            return (
                                <Semester onDeleteClicked={removeSemester}
                                          onGradeChange={changeSubjectGrade}
                                          onDeleteSubjectClicked={removeSubject}
                                          semesterNumber={index + 1}
                                          subjects={semester.subjects}/>
                            );
                        })}
                        <SemesterAdder onClick={addSemester}></SemesterAdder>
                    </Stack>
                </Scrollbars>
            </Box>
            <Box boxShadow={3} sx={{height: "6.2%", background: "#e0dede", marginTop: "0.3%"}}>
                <Divider sx={{background: "#d3d3d3"}}/>
                <Box display="flex" alignItems="center" justifyContent="space-evenly">
                    <Typography marginTop={0.3} variant="h6" fontSize="1.05rem">
                        სულ კრედიტი: {totalCredits}
                    </Typography>
                    <Typography marginTop={0.3} variant="h6" fontSize="1.05rem">
                        GPA: {GPA}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Planner;