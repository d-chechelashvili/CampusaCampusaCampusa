import {useDispatch, useSelector} from 'react-redux';
import {useContext} from "react";

import {Box, CircularProgress, Stack} from "@mui/material";
import Scrollbars from "react-custom-scrollbars-2";

import Semester from "./semester/Semester";
import TotalBar from "./total_bar/TotalBar";
import AuthContext from "../../store/auth-context";
import SemesterAdder from "./semester/SemesterAdder";
import * as PlannerAPI from "../../lib/api/PlannerAPI";
import {semesterActions} from "../../store/redux-store";
import {getCreditsFromSubjects, getGPAFromSubjects} from "../../lib/utils";


function Planner(props) {
    const authContext = useContext(AuthContext);
    const dispatch = useDispatch();
    const semesterList = useSelector((state) => state.semesterList);
    if (!props.plan) {
        return (<Box display="flex" alignItems="center" justifyContent="center">
            <CircularProgress size="4rem" disableShrink/>
        </Box>)
    }

    const addSemester = () => {
        dispatch(semesterActions.addSemester());
    };

    if (semesterList.length === 0) {
        addSemester();
    }

    const removeSemester = (semesterNumber) => {
        dispatch(semesterActions.removeSemester(semesterNumber));
        semesterList[semesterNumber - 1].subjects.forEach((subject) => {
            PlannerAPI.removeSubject(authContext.token, subject.name, semesterNumber);
        });
    };

    const changeSubjectGrade = (semesterNumber, subjectName, grade) => {
        dispatch(semesterActions.selectSubjectGrade({semesterNumber, subjectName, grade}));
        PlannerAPI.updateGrade(authContext.token, subjectName, semesterNumber, grade);
    };

    const removeSubject = (semesterNumber, subjectName) => {
        dispatch(semesterActions.removeSubject({semesterNumber, subjectName}));
        PlannerAPI.removeSubject(authContext.token, subjectName, semesterNumber);
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