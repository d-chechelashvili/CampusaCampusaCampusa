import React from "react";

import YourSubjectScore from "./YourSubjectScore";
import CampusasSubjectScore from "./CampusasSubjectScore";

function SubjectScores(props) {
    return (
        <React.Fragment>
            <YourSubjectScore subjectName={props.subjectName}/>
            <CampusasSubjectScore subjectName={props.subjectName}/>
        </React.Fragment>
    );
}

export default SubjectScores;
