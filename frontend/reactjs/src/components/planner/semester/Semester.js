import {Fragment} from 'react';

import {Stack} from "@mui/material";

import Subject from "../subject/Subject";
import SemesterHeader from "./SemesterHeader";
import {getCreditsFromSubjects, getGPAFromSubjects} from "../../../lib/utils";

function Semester(props) {
    const removeSemester = () => {
        props.onDeleteClicked(props.semesterNumber);
    };

    const removeSubject = (subjectName) => {
        props.onDeleteSubjectClicked(props.semesterNumber, subjectName);
    };

    const updateGrade = (subjectName, grade) => {
        props.onGradeChange(props.semesterNumber, subjectName, grade);
    };

    const GPA = getGPAFromSubjects(props.subjects);
    const credits = getCreditsFromSubjects(props.subjects);

    return (
        <Fragment>
            <SemesterHeader onDeleteClicked={removeSemester}
                            semesterNumber={props.semesterNumber}
                            GPA={GPA} credits={credits}/>
            <Stack spacing={1}>
                {props.subjects.map((subject) => {
                    return (
                        <Subject key={subject.name} name={subject.name}
                                 credits={subject.credits} grade={subject.grade}
                                 onGradeChange={updateGrade} onDeleteClicked={removeSubject}
                        />
                    );
                })}
            </Stack>
        </Fragment>
    );
}

export default Semester;