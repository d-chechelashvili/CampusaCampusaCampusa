import React from "react";

import SubjectHeader from "../components/subject_page/SubjectHeader";
import SubjectScores from "../components/subject_page/SubjectScores";
import SectionDivider from "../components/subject_page/SectionDivider";
import SubjectDetails from "../components/subject_page/SubjectDetails";
import SubjectComments from "../components/subject_page/SubjectComments";
import SubjectDifficulty from "../components/subject_page/SubjectDifficulty";

function SubjectPage(props) {
    return (
        <React.Fragment>
            <SubjectHeader/>
            <SectionDivider/>
            <SubjectDetails/>
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
