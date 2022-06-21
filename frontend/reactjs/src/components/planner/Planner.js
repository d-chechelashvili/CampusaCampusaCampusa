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

    const boxStyle = {
        border: "1px groove #ccc",
        borderRadius: "4px",
        marginTop: "8px",
        paddingTop: 1,
        marginLeft: 2.5,
        marginRight: {xs: 2.5, sm: 0},
        height: "calc(100% - 12px)",
        width: "100%",
    };

    const scrollbarStyle = {
        height: "100%",
    }

    const totalCredits = semesterList.reduce((acc, semester) => acc +
            semester.subjects.reduce((acc2, subject) => acc2 + subject.credits, 0)
        , 0);

    const GPA = (Math.random() * 4.0).toFixed(2);

    return (
        <Box sx={boxStyle}>
            <Box height="93.5%">
                <Scrollbars autoHide style={scrollbarStyle}>
                    <Stack spacing={2}>
                        {semesterList.map((semester, index) => {
                            return (
                                <Semester onDeleteClicked={removeSemester}
                                          onGradeChange={changeSubjectGrade}
                                          semesterNumber={index + 1}
                                          subjects={semester.subjects}/>
                            );
                        })}
                        <SemesterAdder onClick={addSemester}></SemesterAdder>
                    </Stack>
                </Scrollbars>
            </Box>
            <Box sx={{height: "6.2%", background: "#eee", marginTop: "0.3%"}}>
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