import React from 'react'

import {Stack} from "@mui/material";

import Subject from "../Subject/Subject";
import SemesterHeader from "./SemesterHeader";

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

    const credits = props.subjects.reduce((acc, subject) => acc + subject.credits, 0);
    const points = props.subjects.reduce((acc, subject) => {
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


    let GPA = points === "?" ? "?" : +(Math.round(points / credits + "e+2") + "e-2");
    if (props.subjects.length === 0) {
        GPA = 0.0;
    }
    if (Number.isInteger(GPA)) {
        GPA = GPA.toFixed(2);
    }

    return (
        <React.Fragment>
            <SemesterHeader onDeleteClicked={removeSemester}
                            semesterNumber={props.semesterNumber}
                            GPA={GPA} credits={credits}/>
            <Stack spacing={1}>
                {props.subjects.map((subject) => {
                    return (
                        <Subject
                            key={subject.name}
                            name={subject.name}
                            credits={subject.credits}
                            grade={subject.grade}
                            onGradeChange={updateGrade}
                            onDeleteClicked={removeSubject}
                        />
                    );
                })}
            </Stack>
        </React.Fragment>
    );
}

export default Semester;