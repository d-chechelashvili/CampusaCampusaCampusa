import {useEffect} from "react";

import {Box, Grid, Typography} from "@mui/material";

import useHttp from "../hooks/use-http";
import {getAllSubjects} from "../library/api";
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
        return <Typography variant="h2" align="center">Loading...</Typography>;
    }

    if (error) {
        return <Typography variant="h2" align="center">{error}</Typography>;
    }

    if (status === 'completed' && (!loadedSubjects || loadedSubjects.length === 0)) {
        return <Typography variant="h2" align="center">NO DATA</Typography>;
    }

    // const gridStyle = {
    //     height: "100%",
    //     overflowY: "auto",
    //     msOverflowStyle: "none",
    //     scrollbarWidth: "none",
    //     "&::-webkit-scrollbar": {
    //         display: "none"
    //     },
    // };

    return (
        // <Box sx={gridStyle}>
        <Grid container direction="row-reverse" spacing={0}>
            <Grid item xs={12} sm={6}>
                {/*<Box sx={gridStyle}>*/}
                <SubjectList subjects={loadedSubjects}/>
                {/*</Box>*/}
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h1" align="center">Planner</Typography>
            </Grid>
        </Grid>
        // </Box>
    )
    // return (
    //     <div className={classes.screen}>
    //         <div className={classes.planner}>
    //             <Typography variant="h1">Planner</Typography>
    //         </div>
    //         <div className={classes.list}>
    //             <SubjectList subjects={loadedSubjects}/>
    //         </div>
    //     </div>
    // );
};


export default HomePage;
