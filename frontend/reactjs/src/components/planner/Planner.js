import {useDispatch, useSelector} from 'react-redux';
import {semesterActions} from "../../store/redux-store";


import {Box, Stack} from "@mui/material";
import Scrollbars from "react-custom-scrollbars-2";

import Semester from "./Semester/Semester";
import SemesterAdder from "./Semester/SemesterAdder";

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
        dispatch(semesterActions.selectSubjectGrade(semesterNumber, subjectName, grade));
    }

    const boxStyle = {
        border: "1px groove #ccc",
        borderRadius: "4px",
        marginTop: "8px",
        paddingTop: 1,
        marginLeft: 2.5,
        marginRight: {xs: 2.5, sm: 0},
        height: "calc(100% - 12px)",
    };

    const scrollbarStyle = {
        height: "100%",
    }

    //TODO total credits and GPA არის დასამატებელი

    return (
        <Box sx={boxStyle}>
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
    );
}

export default Planner;