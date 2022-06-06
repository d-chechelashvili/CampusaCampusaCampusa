import React from "react";

import YourSubjectScore from "./YourSubjectScore";
import CampusasSubjectScore from "./CampusasSubjectScore";

function SubjectScores(props) {
    return (
        <React.Fragment>
            <YourSubjectScore/>
            <CampusasSubjectScore/>
        </React.Fragment>
    );
}

export default SubjectScores;
