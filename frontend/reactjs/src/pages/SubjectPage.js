import React from "react";

import SubjectHeader from "../components/subject_page/SubjectHeader";
import TimeNeeded from "../components/subject_page/TimeNeeded";

function SubjectPage(props) {
    return (
        <React.Fragment>
            <SubjectHeader/>
            <TimeNeeded />
        </React.Fragment>
    );
}

export default SubjectPage;
