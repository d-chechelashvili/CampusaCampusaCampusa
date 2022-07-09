import {useContext, useEffect} from "react";

import {Box, CircularProgress, Grid, Typography} from "@mui/material";

import useHttp from "../hooks/use-http";
import {getAllSubjects} from "../lib/api";
import AuthContext from "../store/auth-context";
import Planner from "../components/planner/Planner";
import SubjectList from "../components/subject_list/SubjectList";

const HomePage = () => {
    const authContext = useContext(AuthContext);

    const {sendRequest, status, data: loadedSubjects, error} = useHttp(
        getAllSubjects,
        true
    );

    useEffect(() => {
        sendRequest(authContext.token);
    }, [sendRequest, authContext]);

    const gridContainerStyle = {
        marginTop: "0",
        width: "100%",
        height: "calc(100vh - 4.35rem)",
    };

    const gridItemsStyle = {
        height: "calc(100vh - 4.35rem)",
    };

    if (status === "pending") {
        return (
            <Box sx={gridContainerStyle} display="flex"
                 alignItems="center" justifyContent="center">
                {/*<CircularProgress size="10rem" disableShrink/>*/}
            </Box>
        );
    }

    if (error) {
         return (
            <Box sx={gridContainerStyle} display="flex"
                 alignItems="center" justifyContent="center">
                <Typography variant="h6" align="center">{error}</Typography>;
            </Box>
        );
    }

    return (
        <Grid container spacing={0} sx={gridContainerStyle}>
            <Grid item xs={12} sm={6} md={5.2} sx={gridItemsStyle}>
                <Planner/>
            </Grid>
            <Grid item xs={12} sm={6} md={6.8} sx={gridItemsStyle}>
                <SubjectList subjects={loadedSubjects}/>
            </Grid>
        </Grid>
    );
};


export default HomePage;
