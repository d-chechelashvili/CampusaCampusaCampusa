import {useDispatch, useSelector} from 'react-redux';

import {Box, Stack} from "@mui/material";
import Scrollbars from "react-custom-scrollbars-2";

import Semester from "./semester/Semester";
import TotalBar from "./total_bar/TotalBar";
import SemesterAdder from "./semester/SemesterAdder";
import {semesterActions} from "../../store/redux-store";
import {getCreditsFromSubjects, getGPAFromSubjects} from "../../lib/utils";


function Planner() {
    const dispatch = useDispatch();
    const semesterList = useSelector((state) => state.semesterList);

    const addSemester = () => {
        dispatch(semesterActions.addSemester());
    };

    if (semesterList.length === 0) {
        addSemester();
    }

    const removeSemester = (semesterNumber) => {
        dispatch(semesterActions.removeSemester(semesterNumber));
    };

    const changeSubjectGrade = (semesterNumber, subjectName, grade) => {
        dispatch(semesterActions.selectSubjectGrade({semesterNumber, subjectName, grade}));
    };

    const removeSubject = (semesterNumber, subjectName) => {
        dispatch(semesterActions.removeSubject({semesterNumber, subjectName}));
    };

    const GPA = getGPAFromSubjects(semesterList.map((semester) => semester.subjects).flat());
    const totalCredits = getCreditsFromSubjects(semesterList.map((semester) => semester.subjects).flat());

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
    };

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
            <TotalBar totalCredits={totalCredits} GPA={GPA}/>
        </Box>
    );
}

export default Planner;