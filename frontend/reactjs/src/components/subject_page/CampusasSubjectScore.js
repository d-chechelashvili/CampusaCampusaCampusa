import React from "react";
import classes from "./CampusasSubjectScore.module.css";
import {FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select} from "@mui/material";
import Paper from '@mui/material/Paper';
import {Chart, SeriesTemplate, CommonSeriesSettings} from 'devextreme-react/chart';

function CampusasSubjectScore(props) {
    const [year, setYear] = React.useState("ALL");
    const [semester, setSemester] = React.useState("ALL");

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const handleSemesterChange = (event) => {
        setSemester(event.target.value);
    };

    const data = [
        {argument: 'A', value: 22},
        {argument: 'B', value: 28},
        {argument: 'C', value: 11},
        {argument: 'D', value: 8},
        {argument: 'E', value: 1},
        {argument: 'F', value: 30},
    ];

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
