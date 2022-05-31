import {useEffect} from "react";

import {Grid, Typography} from "@mui/material";

import useHttp from "../hooks/use-http";
import {getAllSubjects} from "../library/api";
import Planner from "../components/planner/Planner";
import SubjectList from "../components/subject_list/SubjectList";

const HomePage = () => {
    const {sendRequest, status, data: loadedSubjects, error} = useHttp(
        getAllSubjects,
        true
    );

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    // todo if status pending could show loading spinner
    if (status === 'pending') {
        return <Typography variant="h2" align="center">იტვირთება...</Typography>;
    }

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

    const subjectListStyle = {
        height: "calc(100vh - 5rem)",
    };

    return (
        <Grid container spacing={0} sx={gridContainerStyle}>
            <Grid item xs={12} sm={6}>
                <Planner/>
            </Grid>
            <Grid item xs={12} sm={6} sx={subjectListStyle}>
                <SubjectList subjects={loadedSubjects}/>
            </Grid>
        </Grid>
    );
};


export default HomePage;
