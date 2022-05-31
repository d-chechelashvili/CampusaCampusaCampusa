import React from "react";

import SubjectHeader from "../components/subject_page/SubjectHeader";
import SubjectDifficulty from "../components/subject_page/SubjectDifficulty";

function SubjectPage(props) {
    return (
        <React.Fragment>
            <SubjectHeader/>
            <SubjectDifficulty />
        </React.Fragment>
    );
}

export default SubjectPage;
