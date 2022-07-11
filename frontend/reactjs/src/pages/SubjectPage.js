import React, {useContext, useEffect} from "react";

import SubjectHeader from "../components/subject_page/SubjectHeader";
import SubjectScores from "../components/subject_page/SubjectScores";
import SectionDivider from "../components/subject_page/SectionDivider";
import SubjectDetails from "../components/subject_page/SubjectDetails";
import SubjectComments from "../components/subject_page/SubjectComments";
import SubjectDifficulty from "../components/subject_page/SubjectDifficulty";
import {useParams} from "react-router-dom";
import useHttp from "../hooks/use-http";
import * as SubjectInfoAPI from "../lib/api/SubjectInfoAPI";
import AuthContext from "../store/auth-context";
import {Box, Typography} from "@mui/material";

function SubjectPage(props) {
    const params = useParams();
    const authContext = useContext(AuthContext);
    const {sendRequest, status, data: loadedInfo, error} = useHttp(
        SubjectInfoAPI.getSubjectInfo,
        true
    );

    useEffect(() => {
        sendRequest({accessToken: authContext.token, subjectName: params.subjectName});
    }, [sendRequest, authContext, params.subjectName]);

    if (error) {
        return (
            <Box display="flex"
                 alignItems="center" justifyContent="center">
                <Typography variant="h6">{error}</Typography>
            </Box>
        );
    }

    if (status === "pending") {
        return (
            <Box display="flex" alignItems="center" justifyContent="center">
                {/*<CircularProgress size="10rem" disableShrink/>*/}
            </Box>
        );
    }

    return (
        <React.Fragment>
            <SubjectHeader subjectName={params.subjectName}
                           userRating={loadedInfo.user_rating}
                           averageRating={loadedInfo.general_rating}
                           syllabusPath={loadedInfo.syllabus_path}/>
            <SectionDivider/>
            <SubjectDetails credits={loadedInfo.credits} semester={loadedInfo.semester}
                            prerequisites={loadedInfo.prerequisite_names}/>
            <SectionDivider/>
            <SubjectDifficulty subjectName={params.subjectName}
                               userDifficulty={loadedInfo.user_difficulty}
                               averageDifficulty={loadedInfo.general_difficulty}/>
            <SectionDivider/>
            <SubjectScores subjectName={params.subjectName}/>
            <SectionDivider/>
            <SubjectComments/>
        </React.Fragment>
    );
}

export default SubjectPage;
