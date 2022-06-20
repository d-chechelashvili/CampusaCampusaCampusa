import React from 'react'

import {Stack} from "@mui/material";

import Subject from "../Subject/Subject";
import SemesterHeader from "./SemesterHeader";

function Semester(props) {
    const removeSemester = () => {
        props.onDeleteClicked(props.semesterNumber);
    };

    const updateGrade = (subjectName, grade) => {
        props.onGradeChange(props.semesterNumber, subjectName, grade);
    }

    const credits = props.subjects.reduce((acc, subject) => acc + subject.credits, 0);
    const GPA = (Math.random() * 4.0).toFixed(2);

    return (
        <React.Fragment>
            <SemesterHeader onDeleteClicked={removeSemester}
                            semesterNumber={props.semesterNumber}
                            GPA={GPA} credits={credits}/>
            <Stack spacing={1}>
                {props.subjects.map((subject) => {
                    return (
                        <Subject
                            name={subject.name}
                            credits={subject.credits}
                            grade={subject.grade}
                            onGradeChange={updateGrade}
                        />
                    );
                })}
            </Stack>
        </React.Fragment>
    );
}

export default Semester;