import React from "react";

import SubjectHeader from "../components/subject_page/SubjectHeader";
import SubjectScores from "../components/subject_page/SubjectScores";
import SectionDivider from "../components/subject_page/SectionDivider";
import SubjectDetails from "../components/subject_page/SubjectDetails";
import SubjectComments from "../components/subject_page/SubjectComments";
import SubjectDifficulty from "../components/subject_page/SubjectDifficulty";
import {useParams} from "react-router-dom";

function SubjectPage(props) {
    const params = useParams();
    const subjectName = params.subjectName;

    return (
        <React.Fragment>
            <SubjectHeader subjectName={subjectName}/>
            <SectionDivider/>
            <SubjectDetails/>
            <SectionDivider/>
            <SubjectDifficulty subjectName={subjectName}/>
            <SectionDivider/>
            <SubjectScores subjectName={subjectName}/>
            <SectionDivider/>
            <SubjectComments/>
        </React.Fragment>
    );
}

export default SubjectPage;
