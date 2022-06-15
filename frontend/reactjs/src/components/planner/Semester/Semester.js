import React from 'react'

import SemesterHeader from "./SemesterHeader";
import Subject from "../Subject/Subject";
import {Stack} from "@mui/material";

function Semester(props) {
    const removeSemester = () => {
        props.onDeleteClicked(props.semesterNumber);
    };
    // TODO საგნების წაშლაა დასამატებელი

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
                            grade={subject.grade}/>
                    );
                })}
            </Stack>
        </React.Fragment>
    );
}

export default Semester;