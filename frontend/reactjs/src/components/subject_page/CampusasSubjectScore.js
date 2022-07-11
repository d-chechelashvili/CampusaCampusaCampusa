import React, {useContext, useEffect, useState} from "react";

import {
    Box,
    CircularProgress,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Typography
} from "@mui/material";
import Paper from "@mui/material/Paper";
import {Chart, CommonSeriesSettings, SeriesTemplate} from 'devextreme-react/chart';

import useHttp from "../../hooks/use-http";
import AuthContext from "../../store/auth-context";
import classes from "./CampusasSubjectScore.module.css";
import * as SubjectInfoAPI from "../../lib/api/SubjectInfoAPI";
import {getGradeDistributionFromScores} from "../../lib/utils";

function CampusasSubjectScore(props) {
    const authContext = useContext(AuthContext);
    const [year, setYear] = useState("ALL");
    const [semester, setSemester] = useState("ALL");
    const {sendRequest, status, data: loadedInfo, error} = useHttp(
        SubjectInfoAPI.getScoreDistribution,
        true
    );

    useEffect(() => {
        sendRequest({accessToken: authContext.token, subjectName: props.subjectName, semester, year});
    }, [sendRequest, authContext, props.subjectName, semester, year]);

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
                <CircularProgress size="3rem" disableShrink/>
            </Box>
        );
    }

    const gradeDistribution = getGradeDistributionFromScores(loadedInfo);
    const data = [
        {argument: 'A', value: gradeDistribution.A},
        {argument: 'B', value: gradeDistribution.B},
        {argument: 'C', value: gradeDistribution.C},
        {argument: 'D', value: gradeDistribution.D},
        {argument: 'E', value: gradeDistribution.E},
        {argument: 'F', value: gradeDistribution.F},
    ];

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const handleSemesterChange = (event) => {
        setSemester(event.target.value);
    };


    let years = [];
    for (let i = 2010; i <= new Date().getFullYear(); i++) {
        years.push(i);
    }

    return (
        <React.Fragment>
            <div className={classes.container}>
                <h3 className={classes.text}>შეფასებების სტატისტიკა:</h3>
                <div className={classes.form}>
                    <div className={classes.inputContainer}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">წელი</InputLabel>
                            <Select
                                labelId="year-picker"
                                id="year-picker"
                                value={year}
                                label="წელი"
                                size="small"
                                onChange={handleYearChange}
                            >
                                <MenuItem value={"ALL"}>ყველა</MenuItem>
                                {years.map(year => (
                                    <MenuItem key={year} value={year}>{year}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className={classes.inputContainer}>
                        <FormControl fullWidth>
                            <FormLabel id="demo-row-radio-buttons-group-label">სემესტრი</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                defaultValue="ALL"
                                value={semester}
                                onChange={handleSemesterChange}
                            >
                                <FormControlLabel value="ALL" control={<Radio/>} label="ყველა"/>
                                <FormControlLabel value="FALL" control={<Radio/>} label="შემოდგომის"/>
                                <FormControlLabel value="SPRING" control={<Radio/>} label="გაზაფხულის"/>
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <Paper className={classes.paper} elevation={5}>
                    <Chart
                        id="chart"
                        palette="material"
                        dataSource={data}>
                        <CommonSeriesSettings
                            argumentField="argument"
                            valueField="value"
                            type="bar"
                            ignoreEmptyPoints={true}
                        />
                        <SeriesTemplate nameField="argument"/>
                    </Chart>
                </Paper>
            </div>
        </React.Fragment>
    );
}

export default CampusasSubjectScore;
