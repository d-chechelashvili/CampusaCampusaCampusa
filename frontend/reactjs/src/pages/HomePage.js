import {useContext, useEffect} from "react";

import {Grid, Typography} from "@mui/material";

import useHttp from "../hooks/use-http";
import {getAllSubjects} from "../lib/api";
import Planner from "../components/planner/Planner";
import SubjectList from "../components/subject_list/SubjectList";
import AuthContext from "../store/auth-context";

const HomePage = () => {
    const authContext = useContext(AuthContext);

    const {sendRequest, status, data: loadedSubjects, error} = useHttp(
        getAllSubjects,
        false
    );

    useEffect(() => {
        sendRequest(authContext.token);
    }, [sendRequest]);

    // todo if status is pending could show loading spinner

    if (error) {
        return <Typography variant="h2" align="center">{error}</Typography>;
    }

    if (status === 'completed' && (!loadedSubjects || loadedSubjects.length === 0)) {
        return <Typography variant="h2" align="center">NO DATA</Typography>;
    }

    const gridContainerStyle = {
        marginTop: "0",
        width: "100%",
        height: "calc(100vh - 5rem)",
    };

    const gridItemsStyle = {
        height: "calc(100vh - 5rem)",
    };

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
