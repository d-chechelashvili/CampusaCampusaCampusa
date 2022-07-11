import {useContext, useEffect} from "react";
import {useDispatch} from "react-redux";

import {Box, Grid, Typography} from "@mui/material";

import useHttp from "../hooks/use-http";
import AuthContext from "../store/auth-context";
import * as PlannerAPI from "../lib/api/PlannerAPI";
import Planner from "../components/planner/Planner";
import {semesterActions} from "../store/redux-store";
import * as SubjectListAPI from "../lib/api/SubjectListAPI";
import SubjectList from "../components/subject_list/SubjectList";

const HomePage = () => {
    const dispatch = useDispatch();
    const authContext = useContext(AuthContext);

    const {sendRequest: sendSubjectRequest, status: subjectStatus, data: loadedSubjects, error: subjectError} = useHttp(
        SubjectListAPI.getAllSubjects,
        true
    );

    const {sendRequest: sendPlannerRequest, status: plannerStatus, data: loadedPlan, error: plannerError} = useHttp(
        PlannerAPI.getUserPlan,
        true
    );

    useEffect(() => {
        sendSubjectRequest(authContext.token);
        sendPlannerRequest(authContext.token);
    }, [sendSubjectRequest, sendPlannerRequest, authContext]);

    const gridContainerStyle = {
        marginTop: "0",
        width: "100%",
        height: "calc(100vh - 4.35rem)",
    };

    const gridItemsStyle = {
        height: "calc(100vh - 4.35rem)",
    };

    if (subjectStatus === "pending" || plannerStatus === "pending") {
        return (
            <Box sx={gridContainerStyle} display="flex"
                 alignItems="center" justifyContent="center">
                {/*<CircularProgress size="10rem" disableShrink/>*/}
            </Box>
        );
    }

    if (subjectError || plannerError) {
        return (
            <Box sx={gridContainerStyle} display="flex"
                 alignItems="center" justifyContent="center">
                {subjectError && <Typography variant="h6">{subjectError}</Typography>}
                {plannerError && <Typography variant="h6">{plannerError}</Typography>}
            </Box>
        );
    }

    if (plannerStatus === "completed" && loadedPlan) {
        dispatch(semesterActions.populateSemesterList(loadedPlan));
    }

    return (
        <Grid container spacing={0} sx={gridContainerStyle}>
            <Grid item xs={12} sm={6} md={5.2} sx={gridItemsStyle}>
                <Planner plan={loadedPlan}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6.8} sx={gridItemsStyle}>
                <SubjectList subjects={loadedSubjects}/>
            </Grid>
        </Grid>
    );
};


export default HomePage;
