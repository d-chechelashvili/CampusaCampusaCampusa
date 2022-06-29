import React from "react";

import SubjectHeader from "../components/subject_page/SubjectHeader";
import SubjectDifficulty from "../components/subject_page/SubjectDifficulty";
import SubjectScores from "../components/subject_page/SubjectScores";
import SubjectComments from "../components/subject_page/SubjectComments";
import SectionDivider from "../components/subject_page/SectionDivider";

function SubjectPage(props) {
    return (
        <React.Fragment>
            <SubjectHeader/>
            <SectionDivider/>
            <SubjectDifficulty/>
            <SectionDivider/>
            <SubjectScores/>
            <SectionDivider/>
            <SubjectComments/>
        </React.Fragment>
    );
}

export default SubjectPage;
